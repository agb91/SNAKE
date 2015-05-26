<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
    "http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>Snake stile Nokia 3310/3330</title>
	</head>
	<body>
		<h1>Benvenuto in Snake</h1>
		<?php
			// apre la sessione o controlla che la sessione sia gi� stata aperta;
			session_start();
			if ((isset($_SESSION["login"]))) // se $_SESSION["login"] � TRUE, l'utente � gi� correttamente loggato
			{
				echo '<a href="snake.php">Gioca</a><br>';
				echo '<a href="classifica.php?punteggio=1&utente=1">Classifica</a><br>';
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
