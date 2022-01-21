/*Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor*/

function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 11, 20, 6, 9]
vetor1 =  []
vetor2 = [2,2]
console.log(maiorMenor(vetor))
console.log(maiorMenor(vetor1))
console.log(maiorMenor(vetor2))