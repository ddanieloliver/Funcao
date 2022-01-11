/*Escreva um programa que calcula o preço total da compra do seu celular. Você pode continuar comprando telefones (dica: loop!) até você ficar sem dinheiro na sua conta bancária.
Você irá também comprar acessórios para cada telefone enquanto sua quantidade de dinheiro for menor do que seu limite mensal.
Após calcular o valor da compra, adicione as taxas, depois imprima a quantidade total, devidamente formatada.
Por fim, verifique o total gasto em sua conta bancária para saber se você pode comprar ou não.
Você deve definir algumas constantes para a "taxa de imposto", "preço do telefone", "preço do acessório", e "limite de gastos", assim como variáveis para o seu "saldo bancário".
Você deve definir funções para calcular a taxa e para formatar o preço com um "$" e arredondá-lo para duas casas decimais.
Desafio Extra: Tente incorporar um input para esse programa, talvez com oprompt(..) que abordamos anteriormente em "Input". Você pode definir um prompt para o usuário para definir o saldo de sua
conta bancária, por exemplo. Divirta-se e seja criativo! */

const valorDoSmartphone = 599.49
const imposto = 0.05
const valorDaCapinha = 29.90
const limiteDeGastos = 2500

let saldoBancario = 2790.01
let total = 0

function calcularImposto(total) {
    return total * imposto
}

function formatoDoMontante(total) {
    return '$' + total.toFixed(2)
}

while (total < limiteDeGastos) {
    total = total + valorDoSmartphone

    if (total < limiteDeGastos) {
        total = total + valorDaCapinha
    }
}
total = total + calcularImposto(total)

console.log("Sua compra: " + formatoDoMontante(total))

if(total < saldoBancario){
    console.log("Qual a forma de apagamento?")
} else{console.log("Você não tem saldo suficiente.")}
