let n =document.querySelector('input#txtn')
let list = document.getElementById('txtv')
let res = document.getElementById('res')
let valores=[]
function éNumero(num){
    if(Number(num) >=1 && Number(num) <=100){
        return true
    }else{
        return false
    }
}


function inLista( num, l){
    if (l.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }

}
function adicionar(){
    if (éNumero(n.value) && !inLista(n.value, valores)){ 
        valores.push(Number(n.value))
        let val= document.createElement('option')
        val.text=` Valor ${n.value} adicionado.`
        list.appendChild(val)
        res.innerHTML=''
    }else{alert('Valor inválido ou já encontrado na lista!')}
    n.value=''
    n.focus()
}
function finalizar(){
    if(valores.length==0){
        alert('Adicione valores antes de começar')
    }else{
        let tot= valores.length
        let ma=valores[0]
        let me=valores[0]
        let soma = 0
        let media= 0
        for(let pos in valores){
            soma += valores[pos]
            media= (soma/tot)
            if (valores[pos] > ma){
                 ma = valores[pos]
            } if(valores[pos] < me){
                me = valores[pos]
            }
        }


        res.innerHTML=''
        res.innerHTML +=`<p> Ao todo, ${tot} itens cadastrados.</p>`
        res.innerHTML +=`<p>O maior valor apresentado foi o ${ma}.</p>`
        res.innerHTML +=`<p>O menor valor apresentado foi o ${me}.</p>`
        res.innerHTML +=`<p>Somando todos os valores resulta em ${soma}.</p>`
        res.innerHTML +=`<p>A média de todos os valores é ${media}.</p>`

    }
}

