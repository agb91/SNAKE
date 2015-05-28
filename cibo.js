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
	colore(x, y, coloreCibo);
}
