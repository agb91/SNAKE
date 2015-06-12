<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
    "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>Snake stile Nokia 3310/3330</title>
	</head>
	<body>
		<h1>Benvenuto in Snake</h1>
		<?php
			// apre la sessione o controlla che la sessione sia giï¿½ stata aperta;
			session_start();
			if ((isset($_SESSION["login"]))) // se $_SESSION["login"] ï¿½ TRUE, l'utente ï¿½ giï¿½ correttamente loggato
			{
				echo '<a href="snake.php">Gioca</a><br>';
				echo '<a href="classifica.php?utente='.$_SESSION["login"].'">Classifica personale</a><br>';
				echo '<a href="classifica.php">Classifica globale</a><br>';
				echo '<a href="logout.php">Esci</a><br>';
			} 
			else 
			{
				echo '<h3>Per accedere a questo gioco e la relativa classifica bisogna autenticarsi</h3>';
				echo '<a href="login.php">Accedi</a><br>';
			}
		?>
	</body>
</html>
