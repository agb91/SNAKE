function creaCibo() 
{
	pulisciCibo();
	m = 0;
	n = 0;
	do 
	{
		m = Math.floor(Math.random() * dimensione);
		n = Math.floor(Math.random() * dimensione);
		attuale = document.getElementById(m + "-" + n).style.backgroundColor;
	} 
	while (attuale != coloreSfondo)
	cibo[0] = m;
	cibo[1] = n;
	tipo=scegliCibo();
	colore(m, n, tipo);
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


function isCibo(m,n)
{
	attuale=document.getElementById(m+"-"+n).style.backgroundColor;
	if (attuale==coloreCibo || attuale==coloreCiboBonus1 || attuale==coloreCiboBonus2 || attuale==coloreCiboBonus3)
		return true;
	else 
		return false;
}


function pulisciCibo()
{
	for (i = 0; i < dimensione; i++) 
	{
		for (j = 0; j < dimensione; j++) 
		{
			if (isCibo(i,j))
				document.getElementById(i + "-" + j).style.backgroundColor = coloreSfondo;
		}
	}
}

