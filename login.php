<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
    "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
      <title>Autenticazione per Snake</title>
  </head>
  <body>
  <?php 
  	if (isset($_GET['errore']) && $_GET['errore']==0)
  		echo "<h2>Nome utente o password non corretto</h2><hr>";
  ?>
    <h2>Effettua il login per accedere al gioco oppure <a href=registrazione.php>registrati</a> se sei un nuovo utente</h2>
    <p><a href="index.php">Home</a></p>
	    <form method="post" action="autenticazione.php">
	    	Username: <input type="text" name="username" size="10"/><br>
	    	Password: <input type="text" name="password" size="10"/><br>
	    	<input type="submit" value="Accedi"/>
	    </form>
  </body>
</html>
