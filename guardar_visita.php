<?php
require_once 'conexion.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Método no permitido');
}

$nombre = trim($_POST['nombre'] ?? '');
$comentario = trim($_POST['comentario'] ?? '');

if (
    $nombre === '' ||
    $comentario === '' ||
    mb_strlen($nombre) > 100 ||
    mb_strlen($comentario) > 1000
) {
    http_response_code(400);
    exit('Verifica los datos ingresados');
}

try {
    $sql = "INSERT INTO libro_visitas
            (nombre, comentario)
            VALUES (:nombre, :comentario)";

    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ':nombre' => $nombre,
        ':comentario' => $comentario
    ]);

    header('Location: libro_visitas.php?enviado=1');
    exit;

} catch (PDOException $e) {
    error_log($e->getMessage());
    http_response_code(500);
    exit('No fue posible guardar el comentario');
}
