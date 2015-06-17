

cliccato = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]; // 0 se muove 1 se fermato

function muovi(id,a)
{
    if (cliccato[id]==0)
    {
        cliccato[id]=1;
    }
    else 
    {
        cliccato[id]=0;
    }
   $(window).mousemove(function(event) {
       if(cliccato[id]==0)
       {
           $("#"+id).css('background', 'red');
           $("#"+id).css({"left" : event.clientX, "top" : event.clientY -30});
       }
   });
   
    if(id==51)
    {
        speciale(a);   
    }
}

function speciale(a)
{    
   $(window).mousemove(function(event) {
       if(a>=1)
       {
           i=0;
       }
       else
       {
           i=10;
       }
     for(i; i<50; i++)
     {
       var p= $("#"+51).position();
       var postacolo= $("#"+i).position();
       diffl=p.left-postacolo.left;
       difft=p.top-postacolo.top;
       if(diffl<50 && diffl>-50 && difft<50 && difft>-50)
       {
         if(diffl>0 && difft>0)
         {
           $("#"+i).animate({marginLeft: "-="+ diffl+"px", marginTop: "-="+difft+"px"});
           $("#"+i).css('background', 'red');
         }
         if(diffl<0 && difft>0)
         {
             $("#"+i).animate({marginLeft: "+="+(-diffl)+"px", marginTop: "-="+difft+"px"});
             $("#"+i).css('background', 'yellow');
         }
         if(diffl<0 && difft<0)
         {
            $("#"+i).animate({marginLeft: "+="+(-diffl)+"px", marginTop: "+="+(-difft)+"px"});
            $("#"+i).css('background', 'green');
         }
         if(diffl>0 && difft<0)
         {
             $("#"+i).animate({marginLeft: "-="+diffl+"px", marginTop: "+="+(-difft)+"px"});
             $("#"+i).css('background', 'blue');
         }
       }
     } 
   });
}

