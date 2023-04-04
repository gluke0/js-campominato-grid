// bottone genera una griglia quadrata
// 100 caselle con num progressivo 10x10
// utente clicca cellasi colora di azzurro e in console vedo num cella
    // select con 3 difficoltà  
    // E = 100 (10x10) - M = 81 (9x9) - H = 49 (7x7) 

let button = document.querySelector('#button');
let difficulty = document.querySelector('select');
let structure = document.querySelector('#section');

// parte la partita al click del bottone
button.addEventListener('click', function(){
    game();
})

function game(){
    let level = parseInt(difficulty.value);

    structure.innerHTML = '';

    // genero griglia
    let grid = document.createElement('div');
    grid.classList.add('grid');

    structure.append(grid);

    for(let i = 1; i <= level; i++){

        let box = document.createElement('div');
        box.classList.add('box');
        box.innerText = i; 

        document.querySelector('.grid').append(box);

        box.addEventListener('click', function(){
            this.classList.toggle('played');
            console.log(this.innerText)

        })
    }
}