<?php 
require_once ("controllo.php");
?>
<html>     
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <title>Classifica</title>
    <style type="text/css">
      * { font-size: 18pt; }   
    </style>
  </head>
  <body>
      
    <div>
     <fieldset>
      <legend> <strong>Classifica </strong></legend>
        <?php  // L'INTESTATURA HTML SERVE PER QUESTIONI ESTETICHE (LA APRTE STYLE)
          
		require_once ("talkToData.php");
          
          if (count($_GET)>=1) //chiamato da classifica generale
          {
            $utente = $_GET["utente"];
            echo "Salve ".$utente."<br>";
            if (count($_GET)==2) //chiamato da snake.php
            {
            	$punteggio = $_GET["punteggio"];
            	echo "Il tuo punteggio attuale &egrave;: ".$punteggio."<br><br>" ;
            	talkToData::salvaRecord($utente,$punteggio);
            }
            $classifica=talkToData::leggiRecordPersonale($utente);
            $numPunt=count($classifica);
            echo "Ecco la classifica dei tuoi ".$numPunt." punteggi migliori:<br>";
            
            echo '<table border="1" cellpadding="2" cellspacing="0" style="text-align:right"><col width="40"><col width="120">';
            echo '<thead><td></td><td>Punteggio</td></thead>';
            $n=1;
            for ($i=0; $i<$numPunt; $i++)
            {
            	echo '<tr><td >'.$n.'</td><td>'.$classifica[$i].'</td></tr>';
            	$n++;
            }
            echo "</table><br><br>";
            
            if (count($_GET)==2) //chiamato da snake.php
            	echo '<a href="snake.php">Gioca di nuovo</a> ';
            echo '<a href="classifica.php">Classifica globale</a> ';
          }
          else //chiamato da index.php
          {
         	$classifica=talkToData::leggiRecordGenerale();
          	$numPunt=count($classifica);
          	echo "Ecco la classifica dei ".$numPunt." punteggi migliori:<br>";
          	
          	echo '<table border="1" cellpadding="2" cellspacing="0" style="text-align:right"><col width="40"><col width="100"><col width="120">';
          	echo '<thead><td></td><td>Nome</td><td>Punteggio</td></thead>';
          	$n=1;
          	for ($i=0; $i<$numPunt; $i++)
          	{
          		if ($classifica[$i][0]==$_SESSION["login"])
          			echo '<tr style="background-color:yellow"><td >'.$n.'</td><td>'.$classifica[$i][0].'</td><td>'.$classifica[$i][1].'</td></tr>';
          		else echo '<tr><td >'.$n.'</td><td>'.$classifica[$i][0].'</td><td>'.$classifica[$i][1].'</td></tr>';
          		$n++;
          	}
          	echo "</table><br><br>";
          	echo '<a href="classifica.php?utente='.$_SESSION["login"].'">Classifica personale</a> ';
          }
          echo '<a href="index.php">Home</a>';
        ?>
     </fieldset>
    </div>

  </body>
</html>
