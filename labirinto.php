<?php // INTERMEDIARIO CHE RICEVE LA RICHIESTA AJAX E LA GIRA A TALKTODATA CHE GUARDANDO NEL DB TROVERA LA RISPOSTA
// POI RESTITUITA AL CLIENT USANDO ECHO (stesso schema es ajax fatto in classe)
    require_once "talkToData.php";
    $liv = $_GET["liv"];
    $ris = talkToData::ostacolo($liv);
    echo $ris;
?>
