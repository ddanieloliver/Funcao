//estratégia 1: gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0) ) // o 0 aqui vai retornar falso, oque irá gerar um bug na minha funcionalidade, uma vez que o valor retornando falso,assumirar o valor 1.

// ertrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 // nesse caso trabalhamos com o indice lê-se: 
    c = isNaN(c) ? 1 : c
    return a+b+c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor ES2015
function soma3(a=1, b=1, c=1){
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0))