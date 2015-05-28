function myGetXmlHttpRequest() 
{
	var XmlHttpReq = false;
	var activeXopt = new Array("Microsoft.XmlHttp", "MSXML4.XmlHttp",
			"MSXML3.XmlHttp", "MSXML2.XmlHttp", "MSXML.XmlHttp");
	// prima come oggetto nativo
	try
	{
		XmlHttpReq = new XMLHttpRequest();
	} catch (e) 
	{
		// poi come oggetto ActiveX dal più al meno recente
		var created = false;
		for (var i = 0; i < activeXopt.length && !created; i++) 
		{
			try 
			{
				XmlHttpReq = new ActiveXObject(activeXopt[i]);
				created = true;
			} catch (eActXobj) {
				alert("Il tuo browser non supporta AJAX!");
			}
		}
	}
	return XmlHttpReq;
}


function tornaLabirinto()
// LE DIREZIONI SONO: 1 SE ORIZZONTALE DX E POI VIA IN SENSO ORARIO
{
	if (xhr.readyState == 4) 
	{
		var vost = xhr.responseText;
		disegnaLabirinto(vost);
	}
}


function creaOstacolo(liv) 
{
	var url = "labirinto.php?liv=" + liv;
	xhr = myGetXmlHttpRequest();
	xhr.onreadystatechange = tornaLabirinto;
	xhr.open("GET", url, true);
	xhr.setRequestHeader("connection", "close");
	xhr.send(null);
}


function pulisci() 
{
	for (i = 0; i < dimensione; i++) 
	{
		for (j = 0; j < dimensione; j++) 
		{
			if (document.getElementById(i + "-" + j).style.backgroundColor == coloreOstacolo)
				document.getElementById(i + "-" + j).style.backgroundColor = coloreSfondo;
		}
	}
}


function disegnaLabirinto(v) 
{
	var res = v.split("-");
	var vgen = [];

	for (i = 0; i < res.length - 1; i++) 
	{
		vgen[i] = res[i].split(" ");
	}
	for (r = 0; r < res.length - 1; r++) 
	{
		var at = vgen[r];
		colore(at[0], at[1], coloreOstacolo);
		x = parseInt(at[0]);
		y = parseInt(at[1]);
		d = parseInt(at[2]);
		l = parseInt(at[3]);

		if (d == 1)// orizzontaleNDX
		{
			for (i = 0; i < l; i++)
				{
				//if cibovicino(x,y) then creacibo
					if (document.getElementById((x+i) + "-" + y).style.backgroundColor==coloreCibo)
						creaCibo();
					colore((x + i), y, coloreOstacolo);
				}
		}

		if (d == 2)// verticale DOWN
		{
			for (i = 0; i < l; i++)
				{
					if (document.getElementById(x + "-" + (y+i)).style.backgroundColor==coloreCibo)
						creaCibo();
					colore(x, (y + i), coloreOstacolo);
				}
		}
		if (d == 3)// ORIZZ SX
		{
			for (i = 0; i < l; i++)
				{
					if (document.getElementById((x-i) + "-" + y).style.backgroundColor==coloreCibo)
						creaCibo();
					colore((x - i), y, coloreOstacolo);
				}
		}
		if (d == 4)// VERT UP
		{
			for (i = 0; i < l; i++)
				
				{
					if (document.getElementById(x + "-" + (y-i)).style.backgroundColor==coloreCibo)
							creaCibo();
					colore(x, (y - i), coloreOstacolo);
				}
		}
	}

	
}
