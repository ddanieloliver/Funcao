// O arguments É UM ARRAY INTERNO e está presente em qualquer função e se você não declarar um parâmetro, ele estará vazio.
function soma() {
    let soma = 0
    for(i in arguments) {
        soma += arguments[i]
    }

    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 'Teste'))
console.log(soma('a', 'b', 'c'))