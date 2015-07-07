<?php
session_start();
$_SESSION["giocato"]=true;
$url='classifica.php?utente='.$_GET['utente'].'&punteggio='.$_GET['punteggio'];
header("location: ".$url);
?>
