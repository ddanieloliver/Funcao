//estratégia 1: gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0) ) // o 0 aqui vai retornar falso, oque irá gerar um bug na minha funcionalidade, uma vez que o valor retornando falso,assumirar o valor 1.

// ertrategia 2, 3 e 4 para gerar valor padrão
 