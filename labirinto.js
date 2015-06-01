function myGetXmlHttpRequest() //PRESO DA ESERCIZIO IN CLASSE: SERVE PER USARE AJAX, SEMPRE UGUALE
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


function tornaLabirinto() //CHIAMANDO QUESTA FUNZIONE, CHE SI ATTIVA SSE IL SERVER HA RISPOSTO (READYSTATE4) 
// DISEGNA IL LABIRINTO BASANDOSI SULLE INFO OTTENUTE. FA PARTE DI AJAX
// LE DIREZIONI SONO: 1 SE ORIZZONTALE DX E POI VIA IN SENSO ORARIO
{
	if (xhr.readyState == 4) 
	{
		var vost = xhr.responseText;
		disegnaLabirinto(vost);
	}
}


function creaOstacolo(liv) // RICEVO IL LIVELLO E RICHIEDO AL SERVER QUALI OSTACOLI CI SONO
// NDR USO AJAX, COL METODO GET (dati dopo punto di domanda)
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


function disegnaLabirinto(v) //V È LA STRINGA CON LE INFO DI DISEGNO: È UNA MATRICE DENTRO UNA STRINGA
//QUINDI DEVO DIVIDERLA USANTO I TRATTINI E GLI SPAZI PER TRATTARLA COME MATRICE
{
    // LE INFO DELLA MATRCE SONO XINIZIALE, YINIZIALE, DIREZIONE (1,2,3,4) E LUNGHEZZA DI OGNI LINEA DEL LABIRINTO
	var res = v.split("-");
	var vgen = [];
	var cb = false;

	for (i = 0; i < res.length - 1; i++) 
	{
		vgen[i] = res[i].split(" ");
	}
	for (r = 0; r < res.length - 1; r++) 
	{
		var at = vgen[r];
		colore(at[0], at[1], coloreOstacolo);
		x = parseInt(at[0]); //xinizio
		y = parseInt(at[1]);//yinizio
		d = parseInt(at[2]); //direzione
		l = parseInt(at[3]);//lunghezza
                
                //IL DISEGNO AVVIENE PER OGNI DIREZIONE AUMENTANDO (FINO AL RAGGIUNGIMENTO DELLA LUNGHEZZA)
                // LE X O LE Y VERSO LA DIREZIONE E DISEGNANDO I VARI PUNTI MAN MANO
		if (d == 1)// orizzontaleNDX
		{
			for (i = 0; i < l; i++)
				{
				//if cibovicino(x,y) then creacibo
					if (isCibo((x+i), y))
						cb=true;
					colore((x + i), y, coloreOstacolo);
				}
		}

		if (d == 2)// verticale DOWN
		{
			for (i = 0; i < l; i++)
				{
					if (isCibo(x, (y+i)))
						cb=true;
					colore(x, (y + i), coloreOstacolo);
				}
		}
		if (d == 3)// ORIZZ SX
		{
			for (i = 0; i < l; i++)
				{
					if (isCibo((x-i), y))
						cb=true;
					colore((x - i), y, coloreOstacolo);
				}
		}
		if (d == 4)// VERT UP
		{
			for (i = 0; i < l; i++)
				
				{
					if (isCibo(x, (y-i)))
						cb=true;
					colore(x, (y - i), coloreOstacolo);
				}
		}
	}
	
	if (cb)
		creaCibo();
}
