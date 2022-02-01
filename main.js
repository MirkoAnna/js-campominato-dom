/*  L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, 
altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle. 
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti. 
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.  */




// Collego il pulsante play alla serie di eventi
document.getElementById('play').addEventListener('click', play);
function play() {

    const griglia = document.getElementById('grid');
    
    const numeroBombe = 16;
    const numeroTentativi = [];
    
    let difficolta = document.getElementById('difficulty').value;
    console.log(difficolta);
    
    // Applico condizioni per ogni difficoltà
    // EASY
    if(difficolta == 'easy') {
        
        for (i = 1; i <= 100; i++) {
            let numero = i;
            const nodo = difficoltaEasy();
            griglia.appendChild(nodo);
            nodo.innerHTML = numero;
            const bombe = generatoreBombe(numeroBombe, numero);
            console.log(bombe);
            nodo.addEventListener('click', 
            function() {
                nodo.classList.add('click');
            });
        }
        // HARD
    }   else if (difficolta == 'hard') {
        
        for (i = 1; i <= 81; i++) {
            let numero = i;
            const nodo = difficoltaHard();
            griglia.appendChild(nodo);
            nodo.innerHTML = numero;
            nodo.addEventListener('click', 
            function() {
                nodo.classList.add('click');
            });
        }
        // CRAZY
    }   else {
        for (i = 1; i <= 49; i++) {
            const numero = i;
            const nodo = difficoltaCrazy();
            griglia.appendChild(nodo);
            nodo.innerHTML = numero;
            nodo.addEventListener('click', 
            function() {
                nodo.classList.add('click');
            });
        }
    }



    // FUNZIONI UTILI
    
    function difficoltaEasy() {
        const nodo = document.createElement('div');
        nodo.classList.add('box-easy');
    
        return nodo;
    }
    
    function difficoltaHard() {
        const nodo = document.createElement('div');
        nodo.classList.add('box-hard');
    
        return nodo;
    }
    
    function difficoltaCrazy() {
        const nodo = document.createElement('div');
        nodo.classList.add('box-crazy');
    
        return nodo;
    }

    // Creo funzione per generare numeri casuali
    function generatoreNumeroCasuale(numMin, numMax) {
        return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
    }


    // function alClick() {
    //     this.classList.add('click');
    //     this.removeEventListner('click', alClick);
    // }

    function generatoreBombe(numeroBombe, numeroCaselle) {
        const bombeGenerate = [];
        while (bombeGenerate.length < numeroBombe) {
            const bomba = generatoreNumeroCasuale(1, numeroCaselle);
            if (!bombeGenerate.includes(bomba)) {
                bombeGenerate.push(bomba);
            }
        }
        return bombeGenerate;
    }
    // FINE FUNZIONI UTILI
}