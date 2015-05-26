<?php
session_start();
if (!(isset($_SESSION["login"]))) // se !$_SESSION["login"] l'utente non � loggato
{
	header("location: login.php");
}
?>
