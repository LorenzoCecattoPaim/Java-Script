

function clicou(){
    fetch('https://jsonplaceholder.typicode.com/posts').then((data) => {
        return data.json()
    })
    .then((json) => {
        console.log(json[1].id)
    })
}
function ola(){
    console.log('Oi teste botao')
}

document.querySelector('#botao').addEventListener('click',clicou)