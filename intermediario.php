<html>     
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
    <title>Ricezione classifica</title>
    <style type="text/css">
      * { font-size: 18pt; }   
    </style>
  </head>
  <body>
    <?php  // L'INTESTATURA HTML SERVE PER QUESTIONI ESTETICHE (LA APRTE STYLE)
      function __autoload($class_name) {        // non richiamato
          require_once $class_name . '.php';
      }
      $val=talkToData::getClass();     // prova: usa la classe talkdata per leggere info dal database delle classifiche
      echo $val;                      // e scriverle nell'html che lo ha chiamato
      
      talkToData::salvaRecord("nom1e1","221");    // prova a scrivere nel caso di nuovo utente ed a scovrascrivere se utente già in db
    ?>
  </body>
</html>
