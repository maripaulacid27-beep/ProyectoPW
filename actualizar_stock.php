<?php

header("Content-Type: application/json; charset=UTF-8");

require_once "conexion.php";


$datos =
    json_decode(
        file_get_contents("php://input"),
        true
    );


if (
    !isset($datos["id"]) ||
    !isset($datos["cantidad"])
) {

    echo json_encode([
        "ok" => false,
        "mensaje" => "Datos incompletos"
    ]);

    exit;
}


$id =
    intval($datos["id"]);


$cantidad =
    intval($datos["cantidad"]);


if ($id <= 0 || $cantidad <= 0) {

    echo json_encode([
        "ok" => false,
        "mensaje" => "Datos no válidos"
    ]);

    exit;
}


/*
   Actualizamos únicamente si existe
   suficiente inventario.
*/

$sql = "

    UPDATE productos

    SET stock = stock - ?

    WHERE id = ?

    AND stock >= ?

";


$stmt =
    $conexion->prepare($sql);


$stmt->bind_param(
    "iii",
    $cantidad,
    $id,
    $cantidad
);


$stmt->execute();


if ($stmt->affected_rows > 0) {

    echo json_encode([

        "ok" => true,

        "mensaje" =>
            "Inventario actualizado"

    ]);

}

else {

    echo json_encode([

        "ok" => false,

        "mensaje" =>
            "No hay suficiente inventario"

    ]);

}


$stmt->close();

$conexion->close();

?>