<?php
    require_once "talkToData.php";
    $liv = $_GET["liv"];
    $ris = talkToData::ostacolo($liv);
    echo $ris;
?>
