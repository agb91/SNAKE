//per convertire gli elementi solo la prima volta
conv=true;

//crea gli elementi jquery a partire dalle celle della tabella tenendo conto della posizione e dello scroll della pagina
function converti(el,q)
{
	cella=$("<div id='lsd'>"+$(el).text()+"</div>");
	pT=5 + document.body.scrollTop;
	pL=q-(el.offsetLeft - el.scrollLeft);
	
	while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) )  
	{
		pL += (el.offsetLeft - el.scrollLeft);
        pT += (el.offsetTop - el.scrollTop);
        el = el.offsetParent;
    } 
	cella.css("position", "absolute");
	$("body").append(cella);
	pL -= cella.width();
	cella.offset({top:pT,left:pL});
}


$("img").css("z-index", 0);
$("img").click(function(){muovi(this);});
move=false;

//funzione che gestisce il movimento dell'immagine
function muovi(imm)
{
	if (move){
		move=false;
		$(window).unbind("mousemove");
	}
	else {
		move=true;
		if (conv)
		{
			conv=false;
			$("tbody tr td:first-child").each(function(){converti(this,44);}); //seleziona la prima colonna della tabella
			$("tbody tr td:not(:first-child):nth-child(even)").each(function(){converti(this,190);}); //seleziona la seconda colonna della tabella
			$("tbody tr td:not(:first-child):nth-child(odd)").each(function(){converti(this,336);}); //seleziona la terza colonna della tabella (quando c'è)
			$("tbody td").text(''); //svuota tutta la tabella 
		}
		
		$(window).mousemove(function(e){
			t=e.clientY-40+document.body.scrollTop;
			l=e.clientX-40+document.body.scrollLeft;
			$("img").offset({top:t,left:l});
			$("div#lsd").each(function(){lsd(this,e)});});
	}
}

//genera l'effetto psichedelico di movimento e colore
function lsd(ele,p)
{
	pEle= $(ele).position();
    diffL=p.clientX-pEle.left+document.body.scrollLeft;
    diffT=p.clientY-pEle.top+document.body.scrollTop;
    if(diffL<50 && diffL>-50 && diffT<50 && diffT>-50)
    {
      if(diffL>0 && diffT>0)
      {
        $(ele).animate({left: "-="+ diffL+"px", top: "-="+diffT+"px"});
        $(ele).css('background', 'red');
      }
      if(diffL<0 && diffT>0)
      {
          $(ele).animate({left: "+="+(-diffL)+"px", top: "-="+diffT+"px"});
          $(ele).css('background', 'yellow');
      }
      if(diffL<0 && diffT<0)
      {
         $(ele).animate({left: "+="+(-diffL)+"px", top: "+="+(-diffT)+"px"});
         $(ele).css('background', 'green');
      }
      if(diffL>0 && diffT<0)
      {
          $(ele).animate({left: "-="+diffL+"px", top: "+="+(-diffT)+"px"});
          $(ele).css('background', 'blue');
      }
    }
}

