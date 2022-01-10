// a diferença entre o call e o apply é aforma como eu vou colocar os parametros
function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())


const carro = { preco:49990, desc: 0.2}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17,'$')) // sempre iniciando a distribuir os parametros pelo contexto e depois o restante dos parametros.
console.log(getPreco.apply(global, [0.17, '$'])) //sempre coloco o contexto primeiro e depois o resto dos parametros dentro de um array.

