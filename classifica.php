<?php 
require_once ("controllo.php");
?>
<html>     
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <title>Ricezione classifica</title>
    <style type="text/css">
      * { font-size: 18pt; }   
    </style>
  </head>
  <body>
      
    <div>
     <fieldset>
      <legend> <strong>classifica </strong></legend>
        <?php  // L'INTESTATURA HTML SERVE PER QUESTIONI ESTETICHE (LA APRTE STYLE)
          function __autoload($class_name) {        // non richiamato
          require_once $class_name . '.php';
          }

          if (count($_GET)==2) //chiamato da login
          {
            $utente = $_GET["utente"];
            $punteggio = $_GET["punteggio"];
            talkToData::salvaRecord($utente,$punteggio);    // prova a scrivere nel caso di nuovo utente ed a scovrascrivere se utente gi� in db
            talkToData::salvaTutto($utente,$punteggio);
            echo "Salve ".$utente." il tuo punteggio &egrave;: " . $punteggio. "<br><br>" ;
            echo "Il tuo record personale &egrave;: ". talkToData::leggiRecordPersonale($utente)."<br><br>";
          }
          echo "Il record generale &egrave;: " . talkToData::leggiRecordGenerale();
          echo "<br><br>";
          echo '<a href="logout.php">Esci</a><br>'
        ?>
     </fieldset>
    </div>

  </body>
</html>
