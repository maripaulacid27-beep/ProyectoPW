<?php

$host = "sql213.infinityfree.com";
$usuario = "if0_43037848";
$password = "NAl74UewaEpA";
$baseDatos = "if0_43037848_stylestep";


$conexion = new mysqli(
    $host,
    $usuario,
    $password,
    $baseDatos
);


if ($conexion->connect_error) {

    die("Error de conexión con la base de datos");

}


$conexion->set_charset("utf8mb4");

?>