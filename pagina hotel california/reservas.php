<?php


$nombre = $_POST["nombre"];

$correo = $_POST["correo"];

$telefono = $_POST["telefono"];

$tipo = $_POST["TipoHabitacion"];

$mensaje = $_POST["mensaje"];

$contenido = "nombre : ". $nombre "\nCorreo: ". $correo . "\n telefono : ". $telefono. "\nTipoHabitacion :".$tipo " \n Mensaje: ". $mensaje;

mail(reservas@gmail.com, "Contacto Hotel California", $contenido);

header("Location: gracias.html");

?>