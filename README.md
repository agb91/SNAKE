# SNAKE
progetto prog web


Snake, ispirato all'omonimo gioco dei nokia 3310

Interfaccia: 
Tabella 32*32 (o 64*64) ogni quadrato può essere colorato o bianco andando a creare dei disegni: il serpente che cresce ogni volta che mangia qualcosa, il cibo, rappresentato da un quadratino colorato, gli ostacoli che sono composti da una serie di forme (u, u-rovesciate, L, linee, punti). 

Dinamica: 
L'obbiettivo del gioco è direzionare il serpente con i tasti freccia (il serpente non può mai retrocedere) verso il cibo evitando gli ostacoli.
Il gioco è perso se il serpente colpisce un ostacolo o parti del proprio corpo. Il serpente avanza aggiungendo un quadratino alla parte anteriore del suo corpo e togliendone uno (l'ultimo) dalla coda. La velocità di avanzamento dipende dal livello. Il serpente cresce quando mangia qualcosa, nell'atto della crescita si aggiunge un quadratino alla parte anteriore senza toglierlo a quella posteriore. Il gioco è a livelli, ogni livello ha differenti velocità e ostacoli. Gli ostacoli sono generati in modo casuale basandosi su parametri (quanti [per ogni tipo]), non si possono sovrapporre e non possono creare spazi chiusi.
L'utente accumula punti mangiando il cibo, oltre una soglia di punti vince il livello e accede al successivo.
Esistono classifiche di utenti (basate sul numero massimo di punti raggiunti in una singola partita), essi quindi devo fare il login per poter giocare. Il server mantiene 2 tipi di classifiche: una del singolo utente che mantiene il risultato migliore da esso raggiunto e una generale che mantiene la classifica dei vari utenti (per ogni utente il risultato migliore). Esiste un database che memorizza tutte le partite record di ogni utente, la tabella ha 2 colonne: utente e record.

Client: 
Gestisce la grafica del gioco, il funzionamento del gioco (spostamento serpente, conteggio punti, eventuale gioco perso, vittoria livello)

Server:
Gestisce le classifiche, i login e gli account degli utente. 

Da decidere se la generazione del campo di gioco è competenza del client (al fine di raggiungere la massima efficienza) oppure se è compentenza del server che poi comunica al client la velocità del serpente e posizione, tipo di ogni ostacolo (meno efficiente, a scopo didattico) oppure se è competenza intermedia (il server decide il numero degli ostacoli e la velocità in base al livello metre il client genera la posizione di ogni ostacolo)
