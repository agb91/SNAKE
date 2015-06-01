function creaCibo() 
{
	x = 0;
	y = 0;
	do 
	{
		x = Math.round(Math.random() * dimensione);
		y = Math.round(Math.random() * dimensione);
		attuale = document.getElementById(x + "-" + y).style.backgroundColor;
	} 
	while (attuale != coloreSfondo)
	cibo[0] = x;
	cibo[1] = y;
	tipo=scegliCibo();
	colore(x, y, tipo);
}


function scegliCibo()
{
	t=Math.random();
	if (t<soglia)
		return coloreCibo;
	else
		{
			q=Math.floor(Math.random() * 3);
			switch (q) 
			{
			case 0:
				return coloreCiboBonus1;
			case 1:
				return coloreCiboBonus2;
			case 2:
				return coloreCiboBonus3;
			}
		}
}


function mangiaCibo()
{
	tipo=document.getElementById(cibo[0]+"-"+cibo[1]).style.backgroundColor;
	switch (tipo) 
	{
	case coloreCibo: //cibo normale
		{
			punteggio = punteggio + incrementoPunteggio;
			document.getElementById("punteggio").firstChild.nodeValue = punteggio;
			break;
		}
	case coloreCiboBonus1: //bonus punti
		{
			punteggio = punteggio + incrementoPunteggio*fattoreBonus;
			document.getElementById("punteggio").firstChild.nodeValue = punteggio;
			break;
		}
	case coloreCiboBonus2: //serpente non aumenta di lunghezza e si accorcia di 1
		{
			punteggio = punteggio + incrementoPunteggio;
			document.getElementById("punteggio").firstChild.nodeValue = punteggio;
			vettoreX.pop();
			vettoreY.pop();
			ultimo=vettoreX.length-1;
			colore(vettoreX[ultimo], vettoreY[ultimo], coloreSerpente);
			vettoreX.pop();
			vettoreY.pop();
			break;
		}
	case coloreCiboBonus3: //immortalità finchè non mangio altro
		{
			punteggio = punteggio + incrementoPunteggio;
			document.getElementById("punteggio").firstChild.nodeValue = punteggio;
			coloreSerpente=coloreImmortal;
			immortal=true;
			break;
		}
	}
}


function isCibo(x,y)
{
	attuale=document.getElementById(x+"-"+y).style.backgroundColor;
	if (attuale==coloreCibo || attuale==coloreCiboBonus1 || attuale==coloreCiboBonus2 || attuale==coloreCiboBonus3)
		return true;
	else 
		return false;
}
