let Log = new log(document.querySelector('.log'))

let char = new Knight('Lore')
let monster = new BigMonster()

const cenario = new Cenario(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    Log
);

cenario.start();