//variabili
//IL SERPENTE È RAPRESENTATO DA UNA TESTA (COO X E Y) E 2 ARRAY DI PUNTI (CON COO X E Y)

var contRow = 0;
var testaX = 19;
var testaY = 11;
var vettoreX = [];
var vettoreY = [];
var xhr;
var dir = 1; // 1=dx, 2 = giu, 3 = sx 4=su
var ciclo = 0;
var vivo = true; // sono in gioco?
var mangiato = false; // ho mangiato?
var punteggio = 0;
var incrementoPunteggio = 10;
var fattoreBonus = 3;
var dimensione = 64;
var puntiLivello = 40;
var coloreSfondo = "yellow";
var coloreSerpente;
var coloreNormale = "green";
var coloreImmortal = "orange";
var coloreCibo = "red";
var coloreCiboBonus1 = "blue";
var coloreCiboBonus2 = "gray";
var coloreCiboBonus3 = "orange";
var coloreOstacolo = "black";
var larghezzaTabella = "100";
var altezza1Riga = 5; // cosa è?
var quantoAvanza = 1; // di quanti quadretti per volta avanza il serpente?
var livello = 1;
var velocita = 300; // velocità iniziale
var interval;
var incrementoVelocita = 20; // è alto, ma è solo per provare
var minimoVelocita = 30;
var cibo = [];
var immortal = false;
var soglia = 0.6;


coloreSerpente=coloreNormale;

// inizializzo il serpente di partenza
vettoreX[0] = testaX;
vettoreY[0] = testaY;

vettoreX[1] = 18;
vettoreX[2] = 17;
vettoreX[3] = 16;
vettoreX[4] = 15;
vettoreX[5] = 14;
vettoreX[6] = 13;
vettoreX[7] = 12;

vettoreY[1] = 11;
vettoreY[2] = 11;
vettoreY[3] = 11;
vettoreY[4] = 11;
vettoreY[5] = 11;
vettoreY[6] = 11;
vettoreY[7] = 11;

// creo il cibo di partenza
cibo[0] = -1;
cibo[1] = -1;

//riempio la legenda dei colori
document.getElementById("c1").firstChild.nodeValue = coloreCibo;
document.getElementById("s1").firstChild.nodeValue = "cibo normale";
document.getElementById("c2").firstChild.nodeValue = coloreCiboBonus1;
document.getElementById("s2").firstChild.nodeValue = "bonus punti";
document.getElementById("c3").firstChild.nodeValue = coloreCiboBonus2;
document.getElementById("s3").firstChild.nodeValue = "diminuisce lunghezza";
document.getElementById("c4").firstChild.nodeValue = coloreCiboBonus3;
document.getElementById("s4").firstChild.nodeValue = "immortalità";
