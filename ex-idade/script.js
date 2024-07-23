function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]Verefique os dados e tente novamente!!!')
    }else{
        var fsex= document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[1].checked){
            genero='Mulher'
            if (idade >0 && idade<=14){
                //Criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade >=13 && idade <21){
                //jovem
                img.setAttribute('src', 'jovem m.jpg')
            } else if(idade<50){
                img.setAttribute('src', 'mulher.jpg')
            }else {
                img.setAttribute('src', 'idosa.jpg')
            }
        }else if (fsex[0].checked){
            genero='Homem'
            if (idade >0 && idade<=14){
                //Criança
                img.setAttribute('src', 'menino.jpg')
            } else if (idade >=10 && idade <21){
                //jovem
                img.setAttribute('src', 'jovem h.jpg')
            } else if(idade<50){
                img.setAttribute('src', 'homem.jpg')
            }else {
                img.setAttribute('src', 'idoso.jpg')
            }
        }
        res.style.textAlign='center'
        res.innerHTML = ` Dectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}