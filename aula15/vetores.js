var valores = [2,4,5,1,9]
console.log(valores[2])
valores.push(7)
valores.sort()
console.log(`O vetor tem ${valores.length} posições`)
/*for(var pos=0; pos < valores.length;pos++){console.log(valores[pos])} */

for(let pos in valores){
    console.log(valores[pos])

}
console.log(`O valor está na ${valores.indexOf(9)}º posição`)