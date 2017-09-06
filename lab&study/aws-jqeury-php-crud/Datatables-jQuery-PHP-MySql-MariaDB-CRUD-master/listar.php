<?php
	include ("conexion.php");

	$query = "SELECT * FROM usuario WHERE estado = 1 ORDER BY idusuario desc;";
	$resultado = mysqli_query($conexion, $query);
	
	if( !$resultado )
		die("오류, 쿼리가 실행되지 않았습니다.");
	else{
		$array["data"] = [];//devuelve un arreglo vacio por si no hay registros en la base de datos
		while ( $data = mysqli_fetch_assoc($resultado)){
			$array["data"][] = $data; //array_map("utf8_encode", $data); usar esta función por si no te muestra nada de datos, ya que, hay conflictos con los caracteres raros
		}
		echo json_encode($array);
	}

	mysqli_free_result( $resultado );
	mysqli_close( $conexion );