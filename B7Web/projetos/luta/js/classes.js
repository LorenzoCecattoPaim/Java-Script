class Character{

    _life = 1;
    maxlife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;

    }

    get life(){
        return this._life
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
    }
}

class Knight extends Character{


    constructor(name){
        super(name);
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxLife = this.life
    }

}

class Wizard extends Character{
    constructor(name){
        super(name);
        this.life = 80
        this.attack = 15
        this.defense = 3
        this.maxLife = this.life
    }
}

class LittleMonster extends Character{
    constructor(){
        super('Pequeno Monstro')
        this.life = 40
        this.attack = 4
        this.defense = 4
        this.maxLife = this.life
    }
}

class BigMonster extends Character{
    constructor(){
        super('Super Monstro')
        this.life = 120
        this.attack = 16
        this.defense = 6
        this.maxLife = this.life
    }
}

class Cenario{
    constructor(lutador1, lutador2, lutador1El, lutador2El,logObject){
        this.Lutador1 = lutador1
        this.Lutador1El = lutador1El
        this.Lutador2 = lutador2
        this.Lutador2El = lutador2El
        this.log =logObject
    }

    start(){
        this.update()

        this.Lutador1El.querySelector('.attack').addEventListener('click' , () => this.doAttack(this.Lutador1, this.Lutador2))

        this.Lutador2El.querySelector('.attack').addEventListener('click' , () => this.doAttack(this.Lutador2, this.Lutador1))

    }

    update(){
        this.Lutador1El.querySelector('.name').innerHTML = `${this.Lutador1.name} - ${this.Lutador1.life.toFixed(1)} HP`
        let f1PCt = (this.Lutador1.life / this.Lutador1.maxLife) * 100
        this.Lutador1El.querySelector('.bar').style.width = `${f1PCt}%`

        //divisão */

        
        this.Lutador2El.querySelector('.name').innerHTML = `${this.Lutador2.name} - ${this.Lutador2.life.toFixed(1)} HP`
        let f2PCt = (this.Lutador2.life / this.Lutador2.maxLife) * 100
        this.Lutador2El.querySelector('.bar').style.width = `${f2PCt}%`
    }
    doAttack(attacking, attacked){
        if(attacking.life <= 0){
            this.log.addMessage('Morto não ataca')
            return;
        }
        if(attacked.life <=0){
            this.log.addMessage('Atacando cachorro morto')
            return;
        }

        let attackFactor = (Math.random() * 2).toFixed(2)
        let defenserFactor = (Math.random() * 2).toFixed(2)
        
        let actualAttack = attacking.attack * attackFactor
        let actualdefenser = attacking.attack * defenserFactor

        if(actualAttack > actualdefenser){
            attacked.life -= actualAttack
            this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(1)} em ${attacked.name}`)
        }else{
            this.log.addMessage(`${attacked.name} conseguiu defender`)
        }
        this.update()
    }
    
}
class log{
    list = []

    constructor(listEl){
        this.listEl = listEl
    }

    addMessage(msg){
        this.list.push(msg)
        this.render()
    }

    render(){
        this.listEl.innerHTML = ''

        for(let i in this.list){
            this.listEl.innerHTML += `<li>${this.list[i]}</li>`
        }
    }
}