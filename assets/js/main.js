// bottone genera una griglia quadrata
// 100 caselle con num progressivo 10x10
// utente clicca cellasi colora di azzurro e in console vedo num cella
    // select con 3 difficoltà  
    // E = 100 (10x10) - M = 81 (9x9) - H = 49 (7x7) 

// funzione per creare elemento html

function createdElement(htmlTag, className, text){
    let element = document.createElement(htmlTag)
    element.classList.add(className)
    element.innerText = text;
    return element;
}       

let grid = document.querySelector('.center');

for(let i = 1; i <= 100; i++){
    const box = createdElement("div", "box", i)

    grid.append(box);

    box.addEventListener('click', function(){
        this.classList.toggle('played')
    })

}

let bottom = document.querySelector('.bottom')
let play = document.querySelector('button');
play.addEventListener('click', function(){
    grid.classList.remove('hidden')})

play.addEventListener('click', function(){
    bottom.classList.remove('hidden')
})
