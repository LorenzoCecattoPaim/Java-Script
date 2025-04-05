const person = {
    life :1,
    maxlife : 1,
    attack : 0,
    defense : 0
}

const CreateKnight = (name) => {
    return{
        ...person,
        name,
        life : 100,
        attack :10,
        defense : 8,
        maxLife : 100
    }

}

const CreateWizard = (name) => {
    return{
        ...person,
        name,
        life : 80,
        attack :15,
        defense : 3,
        maxLife : 80
    }
}

const CreateLittleMonster = () => {
    return{
        ...person,
        name:'Pequeno Monstro',
        life : 40,
        attack :4,
        defense : 4,
        maxLife :40
    }
}

const CreateBigMonster = () => {
    return{
        ...person,
        name: 'Monstro Grande',
        life : 120,
        attack :16,
        defense : 6,
        maxLife : 120
    }
}

const Cenario =  {
    lutador1: null,
    lutador2: null,
    lutador1El: null,
    lutador2El: null,

    start(lutador1,lutador2,lutador1El,lutador2El){
        this.lutador1 = lutador1
        this.lutador1El = lutador1El
        this.lutador2 = lutador2
        this.lutador2El = lutador2El

        this.lutador1El.querySelector('.attack').addEventListener('click',() => this.doAttack(this.lutador1,this.lutador2))
        this.lutador2El.querySelector('.attack').addEventListener('click',() => this.doAttack(this.lutador2,this.lutador1))

        this.update()
    },
    update(){
        this.lutador1El.querySelector('.name').innerHTML = `${this.lutador1.name} / ${this.lutador1.life.toFixed(1)} HP`
        let f1Pct = (this.lutador1.life / this.lutador1.maxLife) * 100
        this.lutador1El.querySelector('.bar').style.width = `${f1Pct}%`

        this.lutador2El.querySelector('.name').innerHTML = `${this.lutador2.name} / ${this.lutador2.life.toFixed(1)} HP`      
        let f2Pct = (this.lutador2.life / this.lutador2.maxLife) * 100
        this.lutador2El.querySelector('.bar').style.width = `${f2Pct}%`        
    },

    doAttack(attacking, attacked){
        if(attacking.life <= 0){
            log.addMEssage('Morto não ataca')
            return;
        }
        if(attacked.life <=0){
            log.addMEssage('Atacando cachorro morto')
            return;
        }


        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenserFactor = (Math.random() * 2).toFixed(2)
        
        let actualAttack = attacking.attack * attackFactor
        let actualdefenser = attacking.attack * defenserFactor

        if(actualAttack > actualdefenser){
            attacked.life -= actualAttack
            attacked.life = attacked.life < 0 ? 0 : attacked.life
            log.addMEssage(`${attacking.name} causou ${actualAttack.toFixed(1)} em ${attacked.name}`)
        }else{
            log.addMEssage(`${attacked.name} conseguiu defender`)
        }

        this.update()
    }

}
const log = {
    list: [],
    addMEssage(msg){
        this.list.push(msg)
        this.render()
    },
    render(){
        const logEl = document.querySelector('.log')
        logEl.innerHTML = ''

        for(let i in this.list){
            logEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }

}