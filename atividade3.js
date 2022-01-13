/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
( ) Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

let a
let b
let c

function triangulo(a, b, c) {
    if (a == b && b == c && a== c) {
        return console.log('Equilátero!')
    }

    if (a == b || a == c || b == c ) {
        return console.log('isórceles!')

    }

    if (a !=b && b !=c && c != a){
        return console.log( 'Escaleno!')
    }

    else{ 
        return console.log('isso não é um triângulo')
    }

}
triangulo(6, 6, 6)
triangulo(7, 7, 9)
triangulo(1, 2, 3)
