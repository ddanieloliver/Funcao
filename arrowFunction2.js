//o this dentro deu uma função arrow é fixo, ou seja, é un this baseado no contexto no qual a função foi escrita.
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa