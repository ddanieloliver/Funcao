/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function divisao(dividendo, divisor) {
    console.log("Resultado da divisão: " + Math.floor(dividendo / divisor))
    console.log(`REsto: ${dividendo % divisor}`)
}

divisao(15, 2)