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

          talkToData::salvaRecord($_GET["utente"],$_GET["punteggio"]);    // prova a scrivere nel caso di nuovo utente ed a scovrascrivere se utente già in db
          talkToData::salvaTutto($_GET["utente"],$_GET["punteggio"]);
          echo "Salve ".$_GET["utente"]." il tuo punteggio è: " . $_GET["punteggio"] . "<br><br><br>" ;
          echo "il tuo record personale è: ". talkToData::leggiRecordPersonale($_GET["utente"])."<br>";
          echo "il record generale è: " . talkToData::leggiRecordGenerale();

        ?>
     </fieldset>
    </div>

  </body>
</html>
