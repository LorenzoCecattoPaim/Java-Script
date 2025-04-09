let quadro = {
    a1: '',  a2: '',  a3: '',
    b1: '',  b2: '',  b3: '',
    c1: '',  c2: '',  c3: '',

}

let turn = ''

let waring = ''

let playing = false

reset()

document.querySelector('.reset').addEventListener('click', reset)
document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('click' ,itemclick)
})


function itemclick(event){
    let item = event.target.getAttribute('data-item')
    console.log(item)
    if(playing &&quadro[item] === ''){
        quadro[item] = turn
        renderQuadrado()
        mudarPlayer()
    }
}


function reset(){
    waring = ''

    let random = Math.floor(Math.random() *2)
    if (random === 0){
        turn = 'x'
    }else{
        turn = 'o'
    }

    for(let i in quadro){
        quadro[i] = ''
    }

    playing = true

    renderQuadrado()
    renderInfo()
}

function renderQuadrado(){
    for(let i in quadro) {
        let item = document.querySelector(`div[data-item=${i}]`)

        if(quadro[i] != ''){
            item.innerHTML = quadro[i]
        }else{
            item.innerHTML = ''
        }
    }

    checkGame()
}



function renderInfo(){
    document.querySelector('.vez').innerHTML = turn
    document.querySelector('.resultado').innerHTML = waring
}

function mudarPlayer(){
    turn = (turn === 'x') ? 'o' : 'x'
    renderInfo()
}

function checkGame(){
    if(checkWinerFor('x')){
        waring = 'O "x" venceu'
        playing = false
    }else if(checkWinerFor('o')){
        waring = 'O "o" venceu'
        playing = false
    }else if(isFull()){
        waring = 'Deu empate'
        playing = false
    }
}
function checkWinerFor(turn){
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1',
    ]

    for(let i in pos){
        let pArray = pos[i].split(',')

        let win = pArray.every((option) =>quadro[option] === turn)
        if(win){
            return true
        }
                   
    }

    return false
}


function isFull(){
    for(let i in quadro) {
        if(quadro[i] === ''){
            return false
        }
    }

    return true
}