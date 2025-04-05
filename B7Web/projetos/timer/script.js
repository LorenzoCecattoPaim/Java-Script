let timer = 0
function comecar(){
    timer = setInterval(ShowTime,1000)
}
function parar(){
   clearInterval(timer)
}


function ShowTime(){
    let d =new Date()
    let h = d.getHours()
    let m = d.getMinutes()
    let s = d.getSeconds()

    let txt = h + ':' + m + ':' + s

    document.querySelector('.demo').innerHTML = txt
}