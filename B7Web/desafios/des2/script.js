function calcularImovel(met,qua){
    valor= 3000
    switch (qua){
        case 1:
            valor = valor * met
            break
        case 2:
            valor = met * 1.2 * valor
            break
        case 3:
            valor = met * 1.5 * valor
            break
        default:
            console.log('Número de quartos inválido')
    }
    return valor
}



let metragem = 123
let quartos = 3
let preco = calcularImovel(metragem , quartos)
console.log(`A casa custa R$ ${preco}`)