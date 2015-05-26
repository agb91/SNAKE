<?php 
require_once 'talkToData.php';
	session_start();	
	if (count($_POST)==2) //chiamato da login
	{
		if (talkToData::verificaUtente($_POST["username"], $_POST["password"])) 
		//if ($nomeUtente==$_POST["username"] && $passwordUtente==$_POST["password"])
		{
			// in questo caso, l'utente ha effettuato il login correttamente
			$_SESSION["login"] = $_POST["username"];
			header("location: index.php");
		}
		else 
		{
			header("location: login.php?errore=0");
		}
	}
	else //chiamato da registrazione
	{
			if ($_POST["password"]!=$_POST["password2"]) //se le due password non coincidono
			{
				header("location: registrazione.php?errore=0");
			}
			else 
			{
				if (talkToData::inserisciUtente($_POST["username"], $_POST["password"])) //la registrazione � andata a buon fine
				//if ($nomeUtente!=$_POST["username"])
				{
					$_SESSION["login"] = $_POST["username"];
					header("location: index.php");
				}
				else //nome utente gi� presente
				{
					header("location: registrazione.php?errore=1");
				}
			}
	}
?>
