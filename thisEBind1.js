const pessoa = {
    saudacao : 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // isso sgnifica que eu amarrei o objeto ao this, enão sempre que eu chamar o this, ele fará referencia ao objeto amarrado
falarDePessoa()