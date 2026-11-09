<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">
    <title>Libro de visitas | STYLESTEP</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<section class="visitas">
    <h1>Libro de visitas STYLESTEP</h1>

    <p>
        Nos interesa conocer tu opinión.
        Déjanos un comentario sobre nuestra zapatería.
    </p>

    <form action="guardar_visita.php" method="POST">

        <label for="nombre">Nombre:</label>
        <input
            type="text"
            id="nombre"
            name="nombre"
            maxlength="100"
            required>

        <label for="comentario">Comentario:</label>
        <textarea
            id="comentario"
            name="comentario"
            maxlength="1000"
            required></textarea>

        <button type="submit">
            Enviar comentario
        </button>

    </form>

    <a href="index.html">Volver al inicio</a>
</section>

</body>
</html>
