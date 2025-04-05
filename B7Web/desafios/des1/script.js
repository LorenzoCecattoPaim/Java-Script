function calcPct(n1,n2){
    porcentagem = (n2/n1) * 100
    return porcentagem
}


let x = 40
let y = 10
let pct = calcPct(x,y)
console.log(`${pct}% de ${x} é ${y}`)