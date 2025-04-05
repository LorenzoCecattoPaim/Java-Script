const input = document.querySelector('#text');
const ul = document.querySelector('#Lista');

function enter(e) {
    let tecla = e.key
    if(tecla == 'Enter'){
        const texto = input.value;
        const newLi = document.createElement('li')
        newLi.innerText = texto
        ul.appendChild(newLi)

        input.value = ''
    }
}
input.addEventListener('keydown', enter);
