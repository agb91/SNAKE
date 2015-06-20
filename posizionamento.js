conv=true;

function converti(ele,q)
{
	el=ele;
	pT=5;
	pL=q-(el.offsetLeft - el.scrollLeft);
	
	while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) )  
	{
		pL += (el.offsetLeft - el.scrollLeft);
        pT += (el.offsetTop - el.scrollTop);
        el = el.offsetParent;
    } 
	cella=$("<div id='lsd'>"+$(ele).text()+"</div>");
	cella.css("position", "absolute");
	$("body").append(cella);
	pL -= cella.width();
	cella.offset({top:pT,left:pL});
}


$("img").css("z-index", 100);
$("img").click(function(){muovi(this);});
move=false;
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
			$("tbody tr td:first-child").each(function(){converti(this,44);});
			$("tbody tr td:not(:first-child):nth-child(even)").each(function(){converti(this,190);});
			$("tbody tr td:not(:first-child):nth-child(odd)").each(function(){converti(this,336);});
			$("tbody td").text('');
		}
		$(window).mousemove(function(e){$("img").offset({top:e.clientY-40,left:e.clientX-40});
		$("div#lsd").each(function(){lsd(this,e)});});
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
