//function declaration
function soma(x, y) {
    return x + y
}

//function expression
const sub = function (x, y) {
    return x - y
} /* a diferença entre essa e a primeira é que o código carrega primeiro 
todas as funções e depois começa a ser executadoportanto, se eu colocar
console.log(soma(3,4)) logo nalinha 1, não irá dar erro. mas se eu colocar
console.log(sub(3, 4)) na mesma linha, dará um erro pois a função está armazenada
numa variável, logo, não sera carregada primeiro.*/

// named function expression
const mult = function mult (x, y) {
    return x * y
}