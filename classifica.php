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
    <script type="text/javascript" src="jquery-1.5.1.js"></script>
    <script type="text/javascript" src="posizionamento.js"></script>
  </head>
  <body>
      
    <div>
     <fieldset>
      <legend> <strong>Classifica </strong></legend>
        <?php  // L'INTESTATURA HTML SERVE PER QUESTIONI ESTETICHE (LA APRTE STYLE)
          
		require_once ("talkToData.php");
          $num = count($_GET);
          if ($num>=1) //chiamato da classifica generale
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
            
            echo '<table border="1" cellpadding="2" cellspacing="0" style="text-align:right"><col width="40"><col width="140">';
            echo '<thead><td></td><td>Punteggio</td></thead>';
            $n=1;
            $h=115;
            $id=0;
            for ($i=0; $i<$numPunt; $i++)
            {
            	echo '<tr><td height=40px>'."  " .'</td><td>'."          ".'</td></tr>';
                echo '<p id="'.$id.'" style="position:absolute; left:50px; top:'.$h.'px;">'.$n.'<p id="'.($id+1).'" style="position:absolute; left:140px; top:'.$h.'px;">'.$classifica[$i].'';
            	$n++;
                $h+=40;
                $id+=2;
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
          	
          	echo '<table border="1" cellpadding="2" cellspacing="0" style="text-align:right"><col width="40"><col width="140"><col width="120">';
          	echo '<thead><td></td><td>Nome</td><td>Punteggio</td></thead>';
          	$n=1;
                $h=85;
                $id=10;
          	for ($i=0; $i<$numPunt; $i++)
          	{
          		//se il record è mio lo evidenzio in giallo
          		if ($classifica[$i][0]==$_SESSION["login"])
                        {
                            echo '<tr style="background-color:yellow"><td height=40px>'."  ".'</td><td>'."          ".'</td><td>'."         ".'</td></tr>';
                            echo '<p id="'.$id.'" style="position:absolute; left:40px; top:'.$h.'px;">'.$n.'</p><p id="'.($id+1).'" style="position:absolute; left:110px; top:'.$h.'px;">'.$classifica[$i][0].'</p><p id="'.($id+2).'" style="position:absolute; left:250px; top:'.$h.'px;">'.$classifica[$i][1].'</p>';
                        }
          		else
                        {
                            echo '<tr><td height=40px>'."  ".'</td><td>'."           ".'</td><td>'."           ".'</td></tr>';
                            echo '<p id="'.$id.'" style="position:absolute; left:40px; top:'.$h.'px;">'.$n.'</p><p id="'.($id+1).'" style="position:absolute; left:110px; top:'.$h.'px;">'.$classifica[$i][0].'</p><p id="'.($id+2).'" style="position:absolute; left:250px; top:'.$h.'px;">'.$classifica[$i][1].'</p>';      
                        }
                        $n++;
                        $h+=40;
                        $id+=3;
          	}
          	echo "</table><br><br>";
          	echo '<a href="classifica.php?utente='.$_SESSION["login"].'">Classifica personale</a> ';
          }
          echo '<a href="index.php">Home</a>';
     echo"</fieldset>";
    echo "</div>";
    echo "<div>";
     echo "<p id=\"51\" style=\"position:absolute; left:100px; top:500px;\" onclick=muovi(51,$num);>";
      echo  "<button value=\"prova\"> DISTRUGGI </button>";
     echo "</p>"
     ?>
    </div>  

  </body>
</html>
