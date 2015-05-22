<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <title>Classe JavaScript per generare una tabella html - Dev-OClock.com</title>
    </head>
    <body onload = "setInterval('avanza()',<?php $velocita=450; echo $velocita?>);">
        
        <!-- div container -->
        <div id="div-table"></div>
        
        <script type="text/javascript">
            
            //*** class definition ***
            //variabili
            //IL SERPENTE È RAPRESENTATO DA UNA TESTA (COO X E Y) E 2 ARRAY DI PUNTI (CON COO X E Y)
            var contRow = 0;
            var testaX = 9;
            var testaY = 1;
            var vettoreX = [];
            var vettoreY = [];
            var dir = 1; //1=dx, 2 = giu, 3 = sx 4=su
            var ciclo = 0;
            var vivo = true; //sono in gioco?
            var punteggio=10;// provvisorio cambiare
            var utente="joaoPinto"; // provvisorio, cambiare
            var dimensione = 64;
            var coloreSfondo = "Red";
            var coloreSerpente = "Gray";
            var larghezzaTabella = "50";
            var altezza1Riga = 6;
            var quantoAvanza = 1; // di quanti quadretti per volta avanza il serpente?
            
            // inizializzo il serpente di partenza
            vettoreX[0]=testaX;
            vettoreY[0]=testaY;
            
            vettoreX[1]=8;
            vettoreX[2]=7;
            vettoreX[3]=6;
            vettoreX[4]=5;
            vettoreX[5]=4;
            vettoreX[6]=3;
            vettoreX[7]=2;
            
            vettoreY[1]=1;
            vettoreY[2]=1;
            vettoreY[3]=1;
            vettoreY[4]=1;
            vettoreY[5]=1;
            vettoreY[6]=1;
            vettoreY[7]=1;
                     
            
            function HtmlTable(id, cssInline) { // funzione che crea l'intestazione di una tabella
                //simula la forma di una classe per poter essere usata come tale (fatto irrilevante sul resto del programma)
                //constructor
                this.id = id;
                this.cssInline = cssInline;
                this.htmlOutput = "<table cellspacing=\"0\"  id=\"" + this.id + "\" style=\"" + this.cssInline + "\">";
                //cellspacing 0 per non avere contorni e style che regola la larghezza della tabella
            }
            
            function colore(x,y,color) // coloro del colore detto la cella detta, il conto delle celle parte da 0 non da 1
            {
                var ide = x+"-"+y; 
                attuale=document.getElementById(ide);
                attuale.style.backgroundColor  = color;
            }
            
            function disegnaSerpente()  // mi occupo di disegnare il serpende allo stato attuale
            //non devi occuparti di altro per quanto riguarda il disegno
            {
                for(var i=0; i<vettoreX.length; i++)
                {
                colore(vettoreX[i],vettoreY[i],coloreSerpente);
                }
            }
            
            
            function verifica(tx,ty)  //falso se  vita vero se morte
            // verifica se la nuova posizione della testa mi tiene in gioco o mi uccide (se ho colpito un ostacolo)
            {
                var risp = false;
                var ide = tx+"-"+ty; 
                attuale=document.getElementById(ide);

                if(attuale.style.backgroundColor==coloreSerpente)
                {
                   risp=true; 
                }
                return risp;
            }
            
            function morte()
            {
                 window.location.href = 'intermediario.php?utente=' + utente + "&punteggio=" + punteggio;
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
                  var ultima = vettoreX.length-1; 

                for(var i=ultima; i>0; i-- ) // ogni quadratino del serpente avanza nella posizione del precedente
                {
                    vettoreX[i]=vettoreX[i-1];
                    vettoreY[i]=vettoreY[i-1];
                }
                vettoreX[0]=testaX;
                vettoreY[0]=testaY;
               // l'ultimo viene calcellato 
                colore(vettoreX[ultima],vettoreY[ultima],coloreSfondo);
                vettoreX[ultima]=999; //99 sta per cancellato
                vettoreY[ultima]=999;

           
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
            var myTable = new HtmlTable("test-table-id", "width: "+larghezzaTabella+"%"); //creo la tabella con un id e una larghezza
            
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
            document.getElementById('div-table').innerHTML = myTable.GetHtml();

            // i seguenti comandi collegano la pressione di tasti a una funzione
            window.addEventListener("keydown", key, false);
            window.addEventListener("keypress", key, false);
            window.addEventListener("keyup", key, false);
        </script>
    </body>
</html>
