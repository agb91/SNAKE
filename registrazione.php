<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
    "http://www.w3.org/TR/html4/strict.dtd">
<html>
  <head>
      <title>Registrazione per Snake</title>
  </head>
  <body>
    <?php 
  	if (isset($_GET['errore']) && $_GET['errore']==0)
  		echo "<h2>Le due password non coincidono</h2><hr>";
  	elseif  (isset($_GET['errore']) && $_GET['errore']==1)
  		echo "<h2>Nome utente gi&aacute; presente</h2><hr>";
  	?>
    <h2>Inserire i campi per la registrazione</h2>
    <p><a href="index.php">Home</a></p>
	    <form method="post" action="autenticazione.php">
	    	Username: <input type="text" name="username" size="10"/><br>
	    	Password: <input type="text" name="password" size="10"/><br>
	    	Ripeti password: <input type="text" name="password2" size="10"/><br>
	    	<input type="submit" value="Registrati"/>
	    </form>
  </body>
</html>
