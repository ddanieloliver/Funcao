function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++ //substitui o this pela const self
        console.log(self.idade)
     } /*.bind(this) isso faz a mesma coisa, caso eu não queira criar 
     uma constante para "driblar" a linguagem. */, 1000)
}

new Pessoa