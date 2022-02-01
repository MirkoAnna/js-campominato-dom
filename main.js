/*L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.*/


// FUNZIONI UTILI

function difficoltaEasy() {
    const nodo = document.createElement('div');
    nodo.classList.add('box-easy');
    console.log(nodo);

    return nodo;
}

function difficoltaHard() {
    const nodo = document.createElement('div');
    nodo.classList.add('box-hard');
    console.log(nodo);

    return nodo;
}

function difficoltaCrazy() {
    const nodo = document.createElement('div');
    nodo.classList.add('box-crazy');
    console.log(nodo);

    return nodo;
}
// FINE FUNZIONI UTILI


// Collego il pulsante play alla serie di eventi
let play = document.getElementById('play');
play.addEventListener('click', 
function() {
    const griglia = document.getElementById('grid');

    let difficolta = document.getElementById('difficulty').value;
    console.log(difficolta);

    if(difficolta == 'easy') {

        for (i = 1; i <= 100; i++) {
            const numero = i;
            const nodo = difficoltaEasy();
            griglia.appendChild(nodo);
            nodo.innerHTML = numero;
            nodo.addEventListener('click', 
                function() {
                    nodo.classList.add('click');
                });
        }
    }   else if (difficolta == 'hard') {

        for (i = 1; i <= 81; i++) {
            const numero = i;
            const nodo = difficoltaHard();
            griglia.appendChild(nodo);
            nodo.innerHTML = numero;
            nodo.addEventListener('click', 
                function() {
                    nodo.classList.add('click');
                });
        }

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
}
);