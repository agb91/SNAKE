
function converti(ele,q)
{
	pT=5;
	pL=(q?32:90);
	el=ele;
	while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
       pL += el.offsetLeft - el.scrollLeft;
        pT += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
	
	cella=$("<div id='lsd'>"+$(ele).text()+"</div>");
	cella.css("position", "absolute");
	cella.offset({top:pT,left:pL});
	$("body").append(cella);
}



$("img").click(function(){muovi(this);});
move=false;
function muovi(imm)
{
	if (move){
		move=false;
		$(imm).unbind("mousemove");
	}
	else {
		move=true;
		$(imm).css("z-index", 5);
		$("tbody tr td:first-child").each(function(){converti(this,true);});
		$("tbody tr td:not(:first-child)").each(function(){converti(this,false);});
		$("tbody td").text('');
		$(imm).mousemove(function(e){$(this).offset({top:e.clientY-40,left:e.clientX-40});
		$("div#lsd").each(function(){lsd(this,e)});
		});
	}
}

function lsd(ele,p)
{
	pEle= $(ele).position();
    diffL=p.clientX-pEle.left;
    diffT=p.clientY-pEle.top;
    if(diffL<50 && diffL>-50 && diffT<50 && diffT>-50)
    {
      if(diffL>0 && diffT>0)
      {
        $(ele).animate({marginLeft: "-="+ diffL+"px", marginTop: "-="+diffT+"px"});
        $(ele).css('background', 'red');
      }
      if(diffL<0 && diffT>0)
      {
          $(ele).animate({marginLeft: "+="+(-diffL)+"px", marginTop: "-="+diffT+"px"});
          $(ele).css('background', 'yellow');
      }
      if(diffL<0 && diffT<0)
      {
         $(ele).animate({marginLeft: "+="+(-diffL)+"px", marginTop: "+="+(-diffT)+"px"});
         $(ele).css('background', 'green');
      }
      if(diffL>0 && diffT<0)
      {
          $(ele).animate({marginLeft: "-="+diffL+"px", marginTop: "+="+(-diffT)+"px"});
          $(ele).css('background', 'blue');
      }
    }
}

