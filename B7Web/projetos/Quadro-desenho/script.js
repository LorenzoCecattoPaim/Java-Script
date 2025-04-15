let  corAtual = 'black'

let tela = document.querySelector('#tela')
let context = tela.getContext('2d')
let canDraw = false
let mouseX = 0
let mouseY = 0

//Events
document.querySelectorAll('.colorArea .color').forEach(item => {
    item.addEventListener('click', colorClickEvent)
})


tela.addEventListener('mousedown', mouseDownEvent)
tela.addEventListener('mousemove', mouseMoveEvent)
tela.addEventListener('mouseup', mouseUpEvent)

document.querySelector('.clear').addEventListener('click',clearScreen)



//funções
function colorClickEvent(e){
    let color = e.target.getAttribute('data-color')
    corAtual = color
    document.querySelector('.color.active').classList.remove('active')
    e.target.classList.add('active')
}

function mouseDownEvent(e){
    canDraw = true
    mouseX = e.pageX - tela.offsetLeft
    mouseY = e.pageY - tela.offsetTop
}

function mouseMoveEvent(e){
    if(canDraw){
        Draw(e.pageX, e.pageY)
    }
}

function mouseUpEvent(){
    canDraw = false
}
function Draw(x, y){
    let pointX = x - tela.offsetLeft
    let pointY = y - tela.offsetTop

    context.beginPath()
    context.lineWidth = 5
    context.lineJoin = "round"
    context.moveTo(mouseX, mouseY)
    context.lineTo(pointX,pointY)
    context.closePath()
    context.strokeStyle = corAtual
    context.stroke()

    mouseX = pointX
    mouseY = pointY
}

function clearScreen(){
    context.setTransform(1, 0, 0, 1, 0, 0)
    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
}