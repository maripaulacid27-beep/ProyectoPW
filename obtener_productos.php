<?php

header("Content-Type: application/json; charset=UTF-8");

require_once "conexion.php";


$sql = "

    SELECT

        id,
        nombre,
        categoria,
        precio,
        stock,
        imagen,
        descripcion

    FROM productos

    ORDER BY id DESC

";


$resultado = $conexion->query($sql);


$productos = [];


if ($resultado) {

    while ($fila = $resultado->fetch_assoc()) {

        $fila["id"] =
            intval($fila["id"]);

        $fila["precio"] =
            floatval($fila["precio"]);

        $fila["stock"] =
            intval($fila["stock"]);


        $productos[] = $fila;

    }

}


echo json_encode(
    $productos,
    JSON_UNESCAPED_UNICODE
);


$conexion->close();

?>