function validar(nome,senha){
    if (nome === 'pedro' && senha === '123'){
        return true
    }else{
        return false
    }
}





let usuario = 'joao'
let senha = '123'
let validacao = validar(usuario, senha)
if (validacao){
    console.log('Acesso concedido.')
}else{
    console.log('Acesso NEGADO.')
}