const char = CreateWizard('Lore')
const monster = CreateBigMonster()


Cenario.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)