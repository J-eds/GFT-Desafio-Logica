
class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome  
        this.idade = idade 
        this.tipo = tipo
    }

    atacar() {
        let ataque = " "
       
        if (this.tipo == "mago"){
            ataque = 'magia negra'
        }else if(this.tipo == "guerreiro"){
            ataque = 'uma espada'
        }else if(this.tipo == "monge"){
            ataque = 'artes marciais'
        }else if(this.tipo == "ninja"){
            ataque = 'uma shuriken'
        }else{
           ataque = 'não atacou'
        }
        
    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`)
    }
}

let heroi_guerreiro = new heroi("Felipao da DIO", 25, "guerreiro")
let heroi_mago = new heroi("José Potter", 28, "mago")
let heroi_monge = new heroi("Trapista", 32, "monge")
let heroi_ninja = new heroi("Kato", 24, "ninja")

heroi_guerreiro.atacar()
heroi_mago.atacar()
heroi_monge.atacar()
heroi_ninja.atacar()

