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
          
          if (count($_GET)>0) //chiamato da classifica personale
          {
            $utente = $_SESSION["login"];
            if ($utente!=$_GET["utente"])
            {
            	echo "<h2>Attenzione</h2>";
            	echo "Stai cercando di accedere alla classifica personale di un altro utente<br><br>";
            }
            else 
            {
	            $inserito=true;
            	echo "Salve ".$_SESSION["login"]."<br>";
	            if (count($_GET)==2 && $_SESSION["giocato"]) //chiamato da snake.php
	            {
	            	$punteggio = $_GET["punteggio"];
	            	echo "Il tuo punteggio attuale &egrave;: ".$punteggio."<br><br>" ;
	            	$inserito=talkToData::salvaRecord($utente,$punteggio);
	            	$_SESSION["giocato"]=false;
	            }
	            $classifica=talkToData::leggiRecordPersonale($utente);
	            $numPunt=count($classifica);
	            if ($numPunt>0)
	            {
		            echo "Ecco la classifica dei tuoi ".$numPunt." punteggi migliori:<br>";
		            echo '<table border="1" cellpadding="2" cellspacing="0" style="text-align:right"><col width="40"><col width="140">';
		            echo '<thead><td width="40"></td><td width="140">Punteggio</td></thead>';
		            $n=1;
		            for ($i=0; $i<$numPunt; $i++)
		            {
		            	echo '<tr height=35><td>'.$n.'</td><td>'.$classifica[$i].'</td></tr>';
		            	$n++;
		            }
		            echo "</table><br><br>";
	            }
	            else 
	            	echo "Non ci sono record<br><br>";
	            
	            if (!$inserito)
	            	echo '<img src="distruggi.jpg" width="80px" height="80px"><br>';
	            
	            if (count($_GET)==2) //chiamato da snake.php
	            	echo '<a href="snake.php">Gioca di nuovo</a> ';
	            
            }
            echo '<a href="classifica.php">Classifica globale</a> ';
          }
          else //chiamato da index.php
          {
         	$classifica=talkToData::leggiRecordGenerale();
          	$numPunt=count($classifica);
          	echo "Ecco la classifica dei ".$numPunt." punteggi migliori:<br>";
          	$inserito=false;
          	echo '<table border="1" cellpadding="2" cellspacing="0" style="text-align:right"><col width="40"><col width="140"><col width="140">';
          	echo '<thead><td width="40"></td><td width="140">Nome</td><td width="140">Punteggio</td></thead>';
          	$n=1;
          	for ($i=0; $i<$numPunt; $i++)
          	{
          		//se il record Ã¨ mio lo evidenzio in giallo
          		if ($classifica[$i][0]==$_SESSION["login"])
          		{
          			$inserito=true;
          			echo '<tr style="background-color:yellow" height=35><td >'.$n.'</td><td>'.$classifica[$i][0].'</td><td>'.$classifica[$i][1].'</td></tr>';
          		}
          		else echo '<tr height=35><td >'.$n.'</td><td>'.$classifica[$i][0].'</td><td>'.$classifica[$i][1].'</td></tr>';
          		$n++;
          	}
          	
          	echo "</table><br><br>";
          	if (!$inserito)
          		echo '<img src="distruggi.jpg" width="80px" height="80px"><br>';
          	
          	echo '<a href="classifica.php?utente='.$_SESSION["login"].'">Classifica personale</a> ';
          }
          echo '<a href="index.php">Home</a>';
        ?>
     </fieldset>
    </div>
	<script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="posizionamento.js"></script>
  </body>
</html>
