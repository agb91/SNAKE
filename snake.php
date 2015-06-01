<?php 
require_once ("controllo.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Gioca a Snake</title>
        
    </head>
    <body onload = "avanza();">
        <h2>Welcome <span id="nomeUtente"><?php echo $_SESSION["login"]?></span></h2>
        <p><a href="index.php">Home</a></p>
        <table style="width:500px" style="height:300px">
        <tr>
        <td style="text-align:left">Punteggio: <span id="punteggio" type=text>0</span></td>
        <td style="text-align:right">Livello: <span id="livello" type=text>1</span></td>
        </tr>
        <tr>
        <td id="gioco" colspan="2" style="text-align:center">
        <script type="text/javascript" src="configuratore.js"></script>
        <script type="text/javascript" src="cibo.js"></script>
        <script type="text/javascript" src="labirinto.js"></script>
        <script type="text/javascript" src="snake.js"></script>
        </td></tr>
        </table>     
    </body>
</html>
