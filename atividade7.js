/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos. ( J = C × i × t => simples ) (M = C (1 + i)t => Composto)*/ 
let taxaJuros = 1.5
let capital = 1500
let tempo = 6 

function montanteEmJurosSimples(taxaJuros, capital, tempo){
    return `R$ ${capital + ( capital * taxaJuros * tempo)}`
}

console.log(montanteEmJurosSimples(10/100, 1500, 7))

function montanteEmJurosCompostos(taxaJuros, capital, tempo){
return `R$ ${capital*(1 + taxaJuros)**tempo}`
}

console.log(montanteEmJurosCompostos(10/100, 1500, 7))