<?php
	$server = "localhost";
	$user = "root";
	$password = "17442638";
	$bd = "prueba";

	$conexion = mysqli_connect($server, $user, $password, $bd);
	if (!$conexion){ 
		die('Error de Conexión: ' . mysqli_connect_errno());	
	}
?>

