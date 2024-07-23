function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var agora =data.getHours()
    msg.innerHTML =`Agora são ${agora} horas`
    if (agora >= 0 && agora < 12){
        //dia
        img.src='imagens/manha.png.jpg'
        document.body.style.background='#e2cd9f'
    }else if ( agora >=     12 && agora <= 18){
        //TARDE
        img.src = 'imagens/tarde.png.jpg'
        document.body.style.background = '#b9846f'
    }else{
        //noite
        img.src = 'imagens/noite.png.jpg'
        document.body.style.background = 'purple'
    }
}