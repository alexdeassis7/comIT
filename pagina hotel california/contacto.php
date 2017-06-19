<?php


$nombre = $_POST["nombre"];

$correo = $_POST["correo"];

$telefono = $_POST["telefono"];

$mensaje = $_POST["mensaje"];

$contenido = "nombre : ". $nombre "\nCorreo: ". $correo . "\n telefono : ". $telefono. "\n Mensaje: ". $mensaje;

mail(contacto@gmail.com, "Contacto Hotel California", $contenido);

header("Location: gracias.html");

?>