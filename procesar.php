<?php  
$nombre = $_POST['nombre'];
$mail = $_POST['mail'];
$edad = $_POST['edad']
$mensaje = $_POST['mensaje']

$mensaje = '<h1>'.$nombre.'</h1>';
$mensaje .= '<hr />';
$mensaje = '<h1>'.$email.'</h1>';
$mensaje .= '<hr />';
$mensaje = '<h1>'.$edad.'</h1>';
$mensaje .= $_POST['mensaje'];

$para = 'facundo.peraltaxd@gmail.com';
$asunto = 'Nuevo mensaje en Portfolio';

$headers = 'Mime-version: 1.0\r\n';
$headers .= 'Content-type: text/html;charset=utf-8\r\n';
$headers .= 'From: $mail\r\n';
$headers .= 'To: $para';


mail( $para, $asunto, $mensaje, $headers);
header('Location: index.html#gracias');
?>

