/*Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function intervalo(numero){
    switch(numero){
        case 0: return "Zero" 
            break
        case 1: return "Um" 
            break
        case 2: return "Dois"
            break
        case 3: return "Três"
            break 
        case 4: return "Quatro"
            break 
        case 5: return "Cinco"
            break
        case 6: return "Seis" 
            break 
        case 7: return "Sete"
            break 
        case 8: return "Oito"
            break 
        case 9: return "Nove"
            break 
        case 10: return "Dez"
            break 
        default: return "Número não está dentro do intervalo"
    }

}

console.log(intervalo(0))
console.log(intervalo(1))
console.log(intervalo(2))
console.log(intervalo(3))
console.log(intervalo(4))
console.log(intervalo(5))
console.log(intervalo(6))
console.log(intervalo(7))
console.log(intervalo(8))
console.log(intervalo(9))
console.log(intervalo(10))
console.log(intervalo(100))