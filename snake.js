interval = setInterval(avanza, velocita);
function avanzaLivello() 
{
	liv = (Math.floor(punteggio / puntiLivello)) + 1;
	if (liv > livello) 
	{
		livello = liv;
		if (livello<=10) //sopra i livello massimo 
		{
			pulisci();
			immortal=true;
			coloreSerpente=coloreImmortal;
			creaOstacolo(livello);
		}
		document.getElementById("livello").firstChild.nodeValue = livello;
		clearInterval(interval); // stop setInterval()
		if ((velocita - incrementoVelocita) >= minimoVelocita)
			velocita = velocita - incrementoVelocita;
		else
			velocita = minimoVelocita;
		interval = setInterval(avanza, velocita); // start the setInterval()
	}
}


function HtmlTable(id, cssInline) // funzione che crea l'intestazione di una tabella
{
	// simula la forma di una classe per poter essere usata come tale (fatto irrilevante sul resto del programma) 
	// constructor
	this.id = id;
	this.cssInline = cssInline;
	this.htmlOutput = "<table cellspacing=\"0\"  id=\"" + this.id + "\" style=\"" + this.cssInline + "\">";
	// cellspacing 0 per non avere contorni e style che regola la larghezza della tabella
}


HtmlTable.prototype.AddRow = function(arrCols) { // aggiunge riga alla tabella in modo dinamico
	// arrcols è un array di 64 che indica quante colonne ci sono (quanto è lunga ogni riga)
	this.htmlOutput += "<tr>";
	for (var i = 0; i < arrCols.length; i++) 
	{
		var c = i;
		var id = c + "-" + contRow;
		this.htmlOutput += "<td id=\"" + id + "\" style=\"background-color:"
				+ coloreSfondo + "\" height=\"" + altezza1Riga + "\">" + arrCols[i] + "</td>";
		// gestisce altezza e colore di base
	}
	contRow++;
	this.htmlOutput += "</tr>";
} // il tutto viene scritto con this.htmloutput


// necessario per usare Html table come classe (poco rilevante)
HtmlTable.prototype.GetHtml = function()
{
	return this.htmlOutput + "</table>";
}


// creates an instance of the class (object)
var myTable = new HtmlTable("table-id", "width: " + larghezzaTabella + "%"); // creo la tabella con un id e una larghezza

// calls the method passing an array as argument
riga = new Array();
for (var i = 0; i < dimensione; i++) 
	riga[i] = "";
for (var i = 0; i < dimensione; i++)
	myTable.AddRow(riga);

// injects the resulting html into the div
document.getElementById('gioco').innerHTML = myTable.GetHtml();
// i seguenti comandi collegano la pressione di tasti a una funzione
window.addEventListener("keydown", key, false);
window.addEventListener("keypress", key, false);
window.addEventListener("keyup", key, false);


function colore(x, y, color) // coloro del colore detto la cella detta, il conto delle celle parte da 0 non da 1
// e arriva a 63. controlla se è possibile disegnare...
{
	if (x < 64 && y < 64 && x >= 0 && x >= 0)
		document.getElementById(x + "-" + y).style.backgroundColor = color;
}


function disegnaSerpente() // mi occupo di disegnare il serpende allo stato attuale
// non devi occuparti di altro per quanto riguarda il disegno
{
	for (var i = 0; i < vettoreX.length; i++)
		colore(vettoreX[i], vettoreY[i], coloreSerpente);
	//colore(cibo[0], cibo[1], coloreCibo);
}


function verifica(tx, ty) // falso se vita vero se morte verifica se la nuova posizione della testa 
//mi tiene in gioco o mi uccide (se ho colpito un ostacolo)
{
	risp = false;
	attuale = document.getElementById(tx + "-" + ty).style.backgroundColor;
	if ((attuale == coloreSerpente || attuale == coloreOstacolo))
		risp = true;
	return risp;
}


function morte() //passa a classifica.php
{
	window.location.href = 'classifica.php?utente='
			+ document.getElementById("nomeUtente").firstChild.nodeValue + "&punteggio=" + punteggio;
}

function avanza() // richiamato ogni tot millisecondi dall'html
// porta avanti il serpende di 1 nella direzione attule, verifica se la nuova
// posizione implica la morte e disegna il nuovo serpente
{
	if(cibo[0]==-1) //serve solo per la prima volta
		creaCibo();
	
	if (vivo) // se sono in gioco
	{
		if (dir == 1) 
		{
			testaX += quantoAvanza;
			testaX = testaX % dimensione;
		}
		if (dir == 2) 
		{
			testaY += quantoAvanza;
			testaY = testaY % dimensione;
		}
		if (dir == 3) 
		{
			testaX -= quantoAvanza;
			if (testaX < 0)
				testaX = dimensione - 1;
		}
		if (dir == 4) {
			testaY -= quantoAvanza;
			if (testaY < 0)
				testaY = dimensione - 1;
		}

		if (verifica(testaX, testaY)) // caso morte
		{
			if(!immortal)
			{
				alert("Il tuo gioco finisce qui");
				vivo = false;
				morte();
			}
		}

		if (testaX == cibo[0] && testaY == cibo[1]) // caso cibo
			{
				mangiato = true;
				immortal = false; //appena mangio torno mortale
				coloreSerpente=coloreNormale;
			}

		var ultima = vettoreX.length - 1;
		colore(vettoreX[ultima], vettoreY[ultima], coloreSfondo);
		for (var i = ultima; i > 0; i--) // ogni quadratino del serpente avanza nella posizione del precedente
		{
			vettoreX[i] = vettoreX[i - 1];
			vettoreY[i] = vettoreY[i - 1];
		}
		vettoreX[0] = testaX;
		vettoreY[0] = testaY;

		// se ho mangiato, l'ultimo non viene calcellato
		if (mangiato) 
		{
			vettoreX.push(vettoreX[ultima]);
			vettoreY.push(vettoreY[ultima]);
			mangiato = false;
			mangiaCibo();
			avanzaLivello();
			creaCibo();
		}
		disegnaSerpente(); // disegno il nuovo serpente
	}
}


function key(e) // gestisco la pressione dei tasti comando identificato da un numero (mi interesso delle frecce)
{// gestisce casi di assurdo direzionale (no inversioni a u...)
	var kc = e.keyCode;
	if (kc == 37) 
	{
		if ((dir == 2) || (dir == 4))
			dir = 3;
	}
	if (kc == 38) 
	{
		if ((dir == 1) || (dir == 3))
			dir = 4;
	}
	if (kc == 39) 
	{
		if ((dir == 2) || (dir == 4))
			dir = 1;
	}
	if (kc == 40) 
	{
		if ((dir == 1) || (dir == 3))
			dir = 2;
	}
}
