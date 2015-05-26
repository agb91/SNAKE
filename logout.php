<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
<html>
	<head>
		<title>Logout</title>
	</head>
	<body>
		<?php
		session_start();
		$autorizzato = false;
		if (isset($_SESSION["login"])) {
			$autorizzato = true;
		} else {
			$autorizzato = false;
		}

		// cancello tutti gli eventuali dati di sessione
		$_SESSION = array();

		// cancello l'eventuale cookie di sessione
		if (isset($_COOKIE[session_name()]))
			setcookie(session_name(), '', time() - 42000);

		// distruggo la sessione
		session_destroy();
		?>
		<h1>Effettua il logout</h1>
		<?php 
		if($autorizzato)
		{
			echo "<p>Logout effettuato con successo, torna alla <a href=\"index.php\">Home</a></p>";
		} else
			{
				echo "<p>Logout non effettuato, utente non autenticato: torna alla <a href=\"index.php\">Home</a></p>";
			}
		?>
		<hr>
	</body>
</html>

