          
            //*** class definition ***
            //variabili
            //IL SERPENTE È RAPRESENTATO DA UNA TESTA (COO X E Y) E 2 ARRAY DI PUNTI (CON COO X E Y)
            var xhr;
            
            var contRow = 0;
            var testaX = 19;
            var testaY = 11;
            var vettoreX = [];
            var vettoreY = [];
            var cibo = [];
            var dir = 1; //1=dx, 2 = giu, 3 = sx 4=su
            var ciclo = 0;
            var vivo = true; //sono in gioco?
            var mangiato = false; //ho mangiato?
            var punteggio=0;
            var incrementoPunteggio = 10;
            var celle=7; //quadrato per ostacolo
            var numCelle=8; //quante celle nel campo
            var dimensione = 64;//(celle+1)*numCelle-1;
            var puntiLivello=10; //30
            var coloreSfondo = "yellow";
            var coloreSerpente = "green";
            var coloreCibo = "red";
            var coloreOstacolo = "black";
            var larghezzaTabella = "100";
            var altezza1Riga = 5; //cosa è?
            var quantoAvanza = 1; // di quanti quadretti per volta avanza il serpente?
            var livello=0;
            var velocita=450; //velocità iniziale
            var interval;
            var incrementoVelocita = 100; //è alto, ma è solo per provare
            var minimoVelocita=30;
            
            // inizializzo il serpente di partenza
            vettoreX[0]=testaX;
            vettoreY[0]=testaY;
            
            vettoreX[1]=18;
            vettoreX[2]=17;
            vettoreX[3]=16;
            vettoreX[4]=15;
            vettoreX[5]=14;
            vettoreX[6]=13;
            vettoreX[7]=12;
            
            vettoreY[1]=11;
            vettoreY[2]=11;
            vettoreY[3]=11;
            vettoreY[4]=11;
            vettoreY[5]=11;
            vettoreY[6]=11;
            vettoreY[7]=11;
            
            //creo il cibo di partenza
            cibo[0]=15;
            cibo[1]=4;
              
            
            
            interval=setInterval(avanza, velocita);
            function avanzaLivello()
            {
            	liv=(Math.floor(punteggio/puntiLivello))+1;
            	if (liv>livello)
            		{
            			livello=liv;
            			document.getElementById("livello").firstChild.nodeValue=livello;
            			clearInterval(interval); // stop setInterval()
            			
            			if((velocita-incrementoVelocita)>=minimoVelocita)
            				velocita = velocita-incrementoVelocita;
            			else
            				velocita = minimoVelocita;

            	        interval = setInterval(avanza, velocita); // start the setInterval()
            		}
            	creaOstacolo();
            }
            
            var xhr;

    function myGetXmlHttpRequest()
    {
        var XmlHttpReq = false;
        var activeXopt = new Array("Microsoft.XmlHttp", "MSXML4.XmlHttp", "MSXML3.XmlHttp", "MSXML2.XmlHttp", "MSXML.XmlHttp");
     // prima come oggetto nativo
        try
     {
         XmlHttpReq = new XMLHttpRequest();
    }
    catch(e)
    {
        // poi come oggetto ActiveX dal più al meno recente
        var created = false;
        for(var i=0; i<activeXopt.length && !created; i++)
        {
        try
         {
          XmlHttpReq = new ActiveXObject(activeXopt[i]);
          created = true;
         }
        catch(eActXobj)
         {
            alert("Il tuo browser non supporta AJAX!");
         }
        }
    }
    return XmlHttpReq;  
   }
   
   function disegnaLabirinto(v)
   {
       var res = v.split("-");
       var vgen = [];

       for(i=0; i<res.length-1;i++)
       {
           vgen[i]=res[i].split(" ");
       }
       for(r=0; r<res.length-1; r++)
       {
          var at = vgen[r];
          colore(at[0],at[1],coloreOstacolo);
          x=parseInt(at[0]);
          y=parseInt(at[1]);
          d=parseInt(at[2]);
          l=parseInt(at[3]);
       
       
          if(d==1)//orizzontaleNDX
          {
              for(i=0; i<l;i++)
              {
                  //if((x+i)>0&&(x+i)<dimensione)
                  //{
                     colore((x+i),y,coloreOstacolo);
                  //}
              }
          } 
       
         if(d==2)//verticale DOWN
         {
            for(i=0; i<l;i++)
            {
 //               if((y+i)>0&&(y+i)<dimensione)
  //              {
                   colore(x,y+i,coloreOstacolo);
  //              }
            }
        }
        if(d==3)//ORIZZ SX
        {
            for(i=0; i<l;i++)
            {
    //            if((x-i)>0&&(x-i)<dimensione)
     //           {
                   colore(x-i,y,coloreOstacolo);
      //          }
            }
        }   
        if(d==4)//VERT UP
        {
            for(i=0; i<l;i++)
            {
   //             if((y-i)>0&&(y-i)<dimensione)
     //           {
                   colore(x,y-i,coloreOstacolo);
       //         }
            }
        }  
        }
   }

    function tornaLabirinto()
    // LE DIREZIONI SONO: 1 SE ORIZZONTALE DX E POI VIA IN SENSO ORARIO
    {
        if(xhr.readyState==4)
        {
           var vost = xhr.responseText;
           disegnaLabirinto(vost);
        }
    }
            
    function creaOstacolo()
    {
        var liv="1";
        var url = "labirinto.php?liv=" + liv.toUpperCase();
        xhr = myGetXmlHttpRequest();
        xhr.onreadystatechange=tornaLabirinto;
        xhr.open("GET",url,true);
        xhr.setRequestHeader("connection","close");
        xhr.send(null);
      
        
    }
            
            
            function HtmlTable(id, cssInline) { // funzione che crea l'intestazione di una tabella
                //simula la forma di una classe per poter essere usata come tale (fatto irrilevante sul resto del programma)
                //constructor
                this.id = id;
                this.cssInline = cssInline;
                this.htmlOutput = "<table cellspacing=\"0\"  id=\"" + this.id + "\" style=\"" + this.cssInline + "\">";
                //cellspacing 0 per non avere contorni e style che regola la larghezza della tabella
            }
            
            HtmlTable.prototype.AddRow = function(arrCols) { // aggiunge riga alla tabella in modo dinamico
                //arrcols è un array di 64 che indica quante colonne ci sono (quanto è lunga ogni riga)
                
                
                this.htmlOutput += "<tr>";              
                for(var i = 0; i < arrCols.length; i++) 
                {
                    var c = i;
                    var id = c+"-"+contRow;
                   this.htmlOutput += "<td id=\""+ id+"\" style=\"background-color:"+coloreSfondo+"\" height=\""+altezza1Riga+"\">" + arrCols[i] + "</td>";
                   //gestisce altezza e colore di base
                }
                contRow++;
                this.htmlOutput += "</tr>";                
            } //il tutto viene scritto con this.htmloutput
            
            //necessario per usare Html table come classe (poco rilevante)
            HtmlTable.prototype.GetHtml = function() {
                return this.htmlOutput + "</table>";
            }
            
            //*** how to use the class ***
            
            //creates an instance of the class (object)
            var myTable = new HtmlTable("table-id", "width: "+larghezzaTabella+"%"); //creo la tabella con un id e una larghezza
            
            //calls the method passing an array as argument
            riga = new Array();
            for(var i=0; i<dimensione; i++)
            {
                riga[i]="";
            }
            for(var i=0;i<dimensione;i++)
            {
            myTable.AddRow(riga);
            }
            
            //injects the resulting html into the div
            document.getElementById('gioco').innerHTML = myTable.GetHtml();
            // i seguenti comandi collegano la pressione di tasti a una funzione
            window.addEventListener("keydown", key, false);
            window.addEventListener("keypress", key, false);
            window.addEventListener("keyup", key, false);
            
            function colore(x,y,color) // coloro del colore detto la cella detta, il conto delle celle parte da 0 non da 1
            {
                if(x<64&&y<64&&x>0&&x>0)
                {
                    document.getElementById(x+"-"+y).style.backgroundColor=color;
                }
            }
            
            function disegnaSerpente()  // mi occupo di disegnare il serpende allo stato attuale
            //non devi occuparti di altro per quanto riguarda il disegno
            {
                for(var i=0; i<vettoreX.length; i++)
                {
                colore(vettoreX[i],vettoreY[i],coloreSerpente);
                }
                colore(cibo[0],cibo[1], coloreCibo);
            }
            
            
            function verifica(tx,ty)  //falso se  vita vero se morte
            // verifica se la nuova posizione della testa mi tiene in gioco o mi uccide (se ho colpito un ostacolo)
            {
                risp = false;
                attuale=document.getElementById(tx+"-"+ty).style.backgroundColor;
                if(attuale==coloreSerpente || attuale==coloreOstacolo)
                {
                   risp=true; 
                }
                return risp;
            }
            
            function morte()
            {
                 window.location.href = 'classifica.php?utente=' + document.getElementById("nomeUtente").firstChild.nodeValue + "&punteggio=" + punteggio;
            }
            
            function creaCibo()
            {
            	x=0;
            	y=0;
            	do
            		{
            			x=Math.round(Math.random() * dimensione);
            			y=Math.round(Math.random() * dimensione);
            			attuale=document.getElementById(x+"-"+y).style.backgroundColor;
            		}
            	while (attuale!=coloreSfondo)
            	cibo[0]=x;
            	cibo[1]=y;
            	colore(x,y,coloreCibo);	
            }
            
            
            function avanza() // richiamato ogni tot millisecondi dall'html
            // porta avanti il serpende di 1 nella direzione attule, verifica se la nuova posizione implica la morte
            //e disegna il nuovo serpente
            {
              if(vivo) //se sono in gioco
              {  
                if(dir==1)
                {
                    testaX += quantoAvanza;
                    testaX=testaX%dimensione;
                }                
                if(dir==2)
                {
                    testaY+=quantoAvanza;
                    testaY=testaY%dimensione;
                }
                if(dir==3)
                {
                    testaX-=quantoAvanza;
                    if(testaX<0)
                    {
                        testaX=dimensione-1;
                    }
                }
                if(dir==4)
                {
                    testaY-=quantoAvanza;
                    if(testaY<0)
                    {
                        testaY=dimensione-1;
                    }
                }
                
                if(verifica(testaX,testaY)) // caso morte
                {
                    alert("Il tuo gioco finisce qui");
                    alert("Il punteggio e' "+punteggio);
                    vivo=false;
                    morte();
                }
                
                if (testaX==cibo[0] && testaY==cibo[1]) //caso cibo
                	mangiato=true;
                
                var ultima = vettoreX.length-1; 
                colore(vettoreX[ultima],vettoreY[ultima],coloreSfondo);
                for(var i=ultima; i>0; i-- ) // ogni quadratino del serpente avanza nella posizione del precedente
                {
                    vettoreX[i]=vettoreX[i-1];
                    vettoreY[i]=vettoreY[i-1];
                }
                vettoreX[0]=testaX;
                vettoreY[0]=testaY;
                
                //se ho mangiato, l'ultimo non viene calcellato 
                if (mangiato)
                	{
                		vettoreX.push(vettoreX[ultima]);
                		vettoreY.push(vettoreY[ultima]);
                		mangiato=false;
                		punteggio=punteggio+incrementoPunteggio;
                		document.getElementById("punteggio").firstChild.nodeValue=punteggio;
                		creaCibo();
                		avanzaLivello();
                	}
                
                
                colore(cibo[0],cibo[1],coloreCibo);
                disegnaSerpente(); // disegno il nuovo serpente
              }  
            }
            
            function key(e) //gestisco la pressione dei tasti comando identificato da un numero (mi interesso delle frecce)
            {// gestisce casi di assurdo direzionale (no inversioni a u...)
                var kc = e.keyCode; 
                if(kc == 37)
                {
                    if((dir==2)||(dir==4))
                    {
                        dir=3;
                    }
                }
                if(kc == 38)
                {
                    if((dir==1)||(dir==3))
                    {
                        dir=4;
                    }
                }
                if(kc == 39)
                {
                    if((dir==2)||(dir==4))
                    {
                        dir=1;
                    }
                }
                if(kc == 40)
                {
                    if((dir==1)||(dir==3))
                    {
                        dir=2;
                    }
                }
            }
            
                       
      
