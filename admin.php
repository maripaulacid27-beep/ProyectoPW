<?php
declare(strict_types=1);
session_start();
require_once __DIR__ . '/conexion.php';

$conexion->query("CREATE TABLE IF NOT EXISTS administradores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(80) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4");

function h($value): string {
    return htmlspecialchars((string)$value, ENT_QUOTES, 'UTF-8');
}
function redirigir(): void {
    header('Location: admin.php');
    exit;
}
function csrf_valido(): bool {
    return isset($_POST['csrf'], $_SESSION['csrf']) &&
        hash_equals($_SESSION['csrf'], (string)$_POST['csrf']);
}
if (empty($_SESSION['csrf'])) {
    $_SESSION['csrf'] = bin2hex(random_bytes(32));
}
$mensaje = '';
$error = '';
$totalAdmins = (int)($conexion->query("SELECT COUNT(*) AS total FROM administradores")->fetch_assoc()['total'] ?? 0);
$autenticado = !empty($_SESSION['admin_id']);

function guardarImagen(): ?string {
    if (empty($_FILES['imagen']['name'])) return null;
    if ($_FILES['imagen']['error'] !== UPLOAD_ERR_OK) throw new RuntimeException('No se pudo subir la imagen.');
    if ($_FILES['imagen']['size'] > 5 * 1024 * 1024) throw new RuntimeException('La imagen no debe superar 5 MB.');
    $mime = (new finfo(FILEINFO_MIME_TYPE))->file($_FILES['imagen']['tmp_name']);
    $extensiones = ['image/jpeg'=>'jpg', 'image/png'=>'png', 'image/webp'=>'webp'];
    if (!isset($extensiones[$mime])) throw new RuntimeException('Formato no permitido. Usa JPG, PNG o WEBP.');
    $directorio = __DIR__ . '/uploads/productos';
    if (!is_dir($directorio) && !mkdir($directorio, 0755, true)) throw new RuntimeException('No se pudo crear la carpeta de imágenes.');
    $nombre = bin2hex(random_bytes(16)) . '.' . $extensiones[$mime];
    if (!move_uploaded_file($_FILES['imagen']['tmp_name'], $directorio . '/' . $nombre)) throw new RuntimeException('No se pudo guardar la imagen.');
    return 'uploads/productos/' . $nombre;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!csrf_valido()) {
        $error = 'La sesión del formulario expiró. Recarga la página e inténtalo de nuevo.';
    } else {
        $accion = $_POST['accion'] ?? '';
        try {
            if ($accion === 'crear_admin' && $totalAdmins === 0) {
                $usuario = trim((string)($_POST['usuario'] ?? ''));
                $clave = (string)($_POST['password'] ?? '');
                if (strlen($usuario) < 4 || strlen($clave) < 10) throw new RuntimeException('El usuario debe tener al menos 4 caracteres y la contraseña 10.');
                $hash = password_hash($clave, PASSWORD_DEFAULT);
                $stmt = $conexion->prepare("INSERT INTO administradores (usuario, password_hash) VALUES (?, ?)");
                $stmt->bind_param('ss', $usuario, $hash);
                $stmt->execute();
                $_SESSION['admin_id'] = $stmt->insert_id;
                $_SESSION['admin_usuario'] = $usuario;
                redirigir();
            } elseif ($accion === 'login') {
                $usuario = trim((string)($_POST['usuario'] ?? ''));
                $clave = (string)($_POST['password'] ?? '');
                $stmt = $conexion->prepare("SELECT id, usuario, password_hash FROM administradores WHERE usuario = ? LIMIT 1");
                $stmt->bind_param('s', $usuario);
                $stmt->execute();
                $admin = $stmt->get_result()->fetch_assoc();
                if (!$admin || !password_verify($clave, $admin['password_hash'])) throw new RuntimeException('Usuario o contraseña incorrectos.');
                session_regenerate_id(true);
                $_SESSION['admin_id'] = (int)$admin['id'];
                $_SESSION['admin_usuario'] = $admin['usuario'];
                redirigir();
            } elseif ($accion === 'logout') {
                $_SESSION = [];
                session_destroy();
                redirigir();
            } elseif ($autenticado && in_array($accion, ['guardar_producto', 'eliminar_producto'], true)) {
                if ($accion === 'eliminar_producto') {
                    $id = (int)($_POST['id'] ?? 0);
                    $stmt = $conexion->prepare("DELETE FROM productos WHERE id = ?");
                    $stmt->bind_param('i', $id);
                    $stmt->execute();
                    $mensaje = 'Producto eliminado del catálogo.';
                } else {
                    $id = (int)($_POST['id'] ?? 0);
                    $nombre = trim((string)($_POST['nombre'] ?? ''));
                    $categoria = trim((string)($_POST['categoria'] ?? ''));
                    $precio = filter_var($_POST['precio'] ?? null, FILTER_VALIDATE_FLOAT);
                    $stock = filter_var($_POST['stock'] ?? null, FILTER_VALIDATE_INT);
                    $descripcion = trim((string)($_POST['descripcion'] ?? ''));
                    $imagenUrl = trim((string)($_POST['imagen_url'] ?? ''));
                    if ($nombre === '' || !in_array($categoria, ['Dama','Caballero','Juvenil','Niños'], true) || $precio === false || $precio < 0 || $stock === false || $stock < 0) {
                        throw new RuntimeException('Revisa nombre, categoría, precio y existencias.');
                    }
                    if ($imagenUrl !== '' && !filter_var($imagenUrl, FILTER_VALIDATE_URL)) throw new RuntimeException('La URL de imagen no es válida.');
                    $imagenSubida = guardarImagen();
                    $imagen = $imagenSubida ?: $imagenUrl;
                    if ($id > 0) {
                        if ($imagen === '') {
                            $stmt = $conexion->prepare("UPDATE productos SET nombre=?, categoria=?, precio=?, stock=?, descripcion=? WHERE id=?");
                            $stmt->bind_param('ssdisi', $nombre, $categoria, $precio, $stock, $descripcion, $id);
                        } else {
                            $stmt = $conexion->prepare("UPDATE productos SET nombre=?, categoria=?, precio=?, stock=?, descripcion=?, imagen=? WHERE id=?");
                            $stmt->bind_param('ssdissi', $nombre, $categoria, $precio, $stock, $descripcion, $imagen, $id);
                        }
                        $stmt->execute();
                        $mensaje = 'Producto actualizado correctamente.';
                    } else {
                        $stmt = $conexion->prepare("INSERT INTO productos (nombre, categoria, precio, stock, imagen, descripcion) VALUES (?, ?, ?, ?, ?, ?)");
                        $stmt->bind_param('ssdiss', $nombre, $categoria, $precio, $stock, $imagen, $descripcion);
                        $stmt->execute();
                        $mensaje = 'Producto añadido correctamente al catálogo.';
                    }
                }
            }
        } catch (Throwable $e) {
            $error = $e instanceof RuntimeException ? $e->getMessage() : 'Ocurrió un error al procesar la solicitud. Verifica que la tabla productos exista.';
        }
    }
}

$editando = null;
$productos = [];
if ($autenticado) {
    if (isset($_GET['editar'])) {
        $idEditar = (int)$_GET['editar'];
        $stmt = $conexion->prepare("SELECT * FROM productos WHERE id=?");
        $stmt->bind_param('i', $idEditar);
        $stmt->execute();
        $editando = $stmt->get_result()->fetch_assoc() ?: null;
    }
    $resultado = $conexion->query("SELECT id, nombre, categoria, precio, stock, imagen, descripcion FROM productos ORDER BY id DESC");
    if ($resultado) while ($fila = $resultado->fetch_assoc()) $productos[] = $fila;
}
?>
<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Administración | STYLESTEP</title>
<style>
:root{--ink:#241d2c;--purple:#7045a0;--light:#f7f4fa;--line:#e8e1ed;--muted:#766d7d}
*{box-sizing:border-box}body{margin:0;background:var(--light);color:var(--ink);font-family:Arial,sans-serif}
header{background:#21192b;color:white;padding:20px 5%;display:flex;align-items:center;justify-content:space-between;gap:15px}
.brand{font-size:23px;font-weight:800;letter-spacing:2px}.brand span{color:#c8a7ed}
main{max-width:1150px;margin:32px auto;padding:0 18px}.panel{background:white;border:1px solid var(--line);border-radius:16px;padding:24px;margin-bottom:22px;box-shadow:0 8px 28px #30203a0b}
h1{margin:0 0 8px;font-size:28px}h2{margin:0 0 18px;font-size:20px}.muted{color:var(--muted)}label{display:block;font-weight:700;font-size:13px;margin:0 0 7px}
input,select,textarea{width:100%;padding:12px;border:1px solid #d9d0e0;border-radius:9px;font:inherit;background:#fff;color:var(--ink)}
textarea{min-height:90px;resize:vertical}.grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}.full{grid-column:1/-1}
button,.btn{border:0;border-radius:9px;background:var(--purple);color:white;padding:12px 18px;font-weight:700;cursor:pointer;text-decoration:none;display:inline-block}
.btn.secondary,button.secondary{background:#eee8f4;color:#463253}.btn.danger,button.danger{background:#a9344b}
.actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.notice{padding:12px 15px;border-radius:9px;margin-bottom:18px;background:#e9f7ee;color:#21643b}.error{background:#fff0f0;color:#9b2935}
table{width:100%;border-collapse:collapse}th,td{text-align:left;padding:12px 9px;border-bottom:1px solid var(--line);vertical-align:middle}th{font-size:12px;color:var(--muted);text-transform:uppercase}
.thumb{width:58px;height:58px;object-fit:cover;border-radius:9px;background:#eee}.login{max-width:460px;margin:8vh auto}.topline{display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap}
@media(max-width:700px){.grid{grid-template-columns:1fr}.full{grid-column:auto}.table-wrap{overflow-x:auto}table{min-width:650px}header{padding:18px}}
</style>
    <link rel="stylesheet" href="tema-nocturno.css">
</head>
<body>
<header><div class="brand">STYLE<span>STEP</span> <small style="font-size:12px;font-weight:400;letter-spacing:0"> / ADMINISTRACIÓN</small></div>
<?php if ($autenticado): ?><form method="post"><input type="hidden" name="csrf" value="<?=h($_SESSION['csrf'])?>"><input type="hidden" name="accion" value="logout"><button class="secondary" type="submit">Cerrar sesión</button></form><?php endif; ?></header>
<?php if (!$autenticado): ?>
<main class="login"><section class="panel">
<h1><?= $totalAdmins === 0 ? 'Crear acceso administrador' : 'Iniciar sesión' ?></h1>
<p class="muted"><?= $totalAdmins === 0 ? 'Configura el primer usuario administrador. Guarda tus credenciales en un lugar seguro.' : 'Accede para administrar el catálogo de STYLESTEP.' ?></p>
<?php if ($error): ?><div class="notice error"><?=h($error)?></div><?php endif; ?>
<form method="post"><input type="hidden" name="csrf" value="<?=h($_SESSION['csrf'])?>"><input type="hidden" name="accion" value="<?= $totalAdmins === 0 ? 'crear_admin' : 'login' ?>">
<div style="margin:16px 0"><label>Usuario</label><input name="usuario" required minlength="4" autocomplete="username"></div>
<div style="margin:16px 0"><label>Contraseña</label><input type="password" name="password" required minlength="<?= $totalAdmins === 0 ? '10' : '1' ?>" autocomplete="<?= $totalAdmins === 0 ? 'new-password' : 'current-password' ?>"></div>
<button type="submit" style="width:100%"><?= $totalAdmins === 0 ? 'Crear administrador' : 'Entrar al panel' ?></button></form>
</section></main>
<?php else: ?>
<main>
<div class="topline"><div><h1>Panel de administración</h1><p class="muted">Gestiona los productos que aparecen en el catálogo de tu tienda.</p></div><a class="btn secondary" href="index.html" target="_blank">Ver tienda ↗</a></div>
<?php if ($mensaje): ?><div class="notice"><?=h($mensaje)?></div><?php endif; ?><?php if ($error): ?><div class="notice error"><?=h($error)?></div><?php endif; ?>
<section class="panel" id="formulario"><h2><?= $editando ? 'Editar producto' : 'Añadir producto nuevo' ?></h2>
<form method="post" enctype="multipart/form-data"><input type="hidden" name="csrf" value="<?=h($_SESSION['csrf'])?>"><input type="hidden" name="accion" value="guardar_producto"><input type="hidden" name="id" value="<?=h($editando['id'] ?? 0)?>">
<div class="grid">
<div><label>Nombre del producto *</label><input name="nombre" required maxlength="150" value="<?=h($editando['nombre'] ?? '')?>" placeholder="Ej. Tenis Urban"></div>
<div><label>Categoría *</label><select name="categoria" required><?php foreach (['Dama','Caballero','Juvenil','Niños'] as $cat): ?><option value="<?=h($cat)?>" <?=($editando['categoria'] ?? '')===$cat?'selected':''?>><?=h($cat)?></option><?php endforeach; ?></select></div>
<div><label>Precio (MXN) *</label><input type="number" name="precio" min="0" step="0.01" required value="<?=h($editando['precio'] ?? '')?>" placeholder="699.00"></div>
<div><label>Existencias *</label><input type="number" name="stock" min="0" step="1" required value="<?=h($editando['stock'] ?? 0)?>"></div>
<div class="full"><label>Descripción</label><textarea name="descripcion" maxlength="1000" placeholder="Describe el producto..."><?=h($editando['descripcion'] ?? '')?></textarea></div>
<div><label>Subir imagen (JPG, PNG o WEBP, máximo 5 MB)</label><input type="file" name="imagen" accept="image/jpeg,image/png,image/webp"></div>
<div><label>O URL de imagen</label><input name="imagen_url" type="url" value="<?=h((isset($editando['imagen']) && !str_starts_with($editando['imagen'],'uploads/')) ? $editando['imagen'] : '')?>" placeholder="https://..."></div>
<?php if (!empty($editando['imagen'])): ?><div class="full"><span class="muted">Imagen actual:</span><br><img class="thumb" src="<?=h($editando['imagen'])?>" alt="Imagen actual"></div><?php endif; ?>
</div><div class="actions" style="margin-top:18px"><button type="submit"><?= $editando ? 'Guardar cambios' : 'Añadir al catálogo' ?></button><?php if ($editando): ?><a class="btn secondary" href="admin.php#formulario">Cancelar edición</a><?php endif; ?></div>
</form></section>
<section class="panel"><div class="topline"><div><h2>Productos del catálogo</h2><p class="muted"><?=count($productos)?> producto(s) registrados</p></div></div>
<?php if (!$productos): ?><p class="muted">Aún no hay productos en la base de datos. Añade el primero desde el formulario.</p><?php else: ?><div class="table-wrap"><table><thead><tr><th>Imagen</th><th>Producto</th><th>Categoría</th><th>Precio</th><th>Stock</th><th>Acciones</th></tr></thead><tbody>
<?php foreach ($productos as $prod): ?><tr><td><?php if ($prod['imagen']): ?><img class="thumb" src="<?=h($prod['imagen'])?>" alt=""><?php else: ?>—<?php endif; ?></td><td><strong><?=h($prod['nombre'])?></strong><br><small class="muted"><?=h($prod['descripcion'])?></small></td><td><?=h($prod['categoria'])?></td><td>$<?=number_format((float)$prod['precio'],2)?></td><td><?=h($prod['stock'])?></td><td><div class="actions"><a class="btn secondary" href="admin.php?editar=<?= (int)$prod['id'] ?>#formulario">Editar</a><form method="post" onsubmit="return confirm('¿Eliminar este producto del catálogo?')"><input type="hidden" name="csrf" value="<?=h($_SESSION['csrf'])?>"><input type="hidden" name="accion" value="eliminar_producto"><input type="hidden" name="id" value="<?= (int)$prod['id'] ?>"><button class="danger" type="submit">Eliminar</button></form></div></td></tr><?php endforeach; ?>
</tbody></table></div><?php endif; ?></section>
</main>
<?php endif; ?>
    <script src="tema-nocturno.js"></script>
</body></html>
