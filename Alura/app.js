alert('Boas Vindas ao jogo do número secreto!')
let NumeroMax = prompt('Qual o maior número?')
let NumeroSorteado = parseInt(Math.random()*NumeroMax + 1)

let chute;
let tentativas=1

while (NumeroSorteado!=chute){
    chute = prompt(`Tente adivinhar o número de 1 a ${NumeroMax}`);

    if (chute == NumeroSorteado){
        break;
    }else{
        if (chute > NumeroSorteado){
        alert(`O número é menor que ${chute}`);
        }else{
            alert(`O número é maior do que ${chute}`);
        }
        tentativas++
    }       
}

let PalavraTentati = tentativas==1?'tentativa':'tentativas'

alert(`Isso ai! Você descobriu o número secreto ${NumeroSorteado} com ${tentativas} ${PalavraTentati}!`)