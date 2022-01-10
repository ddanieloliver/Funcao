//Função factory é uma função que no final retorna um objeto
// Factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
console.log(criarPessoa())
//Sempre que eu executar essa função, vou criar um novo objeto
