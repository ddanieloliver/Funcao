/*Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
e imprime a quantidade no console.*/

function contarNegativos(vetor){
    let qtdNegativos = 0
    for(let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0) {
            qtdNegativos ++
        }
    }
    return `Há ${qtdNegativos} negativos`
}

vetor = [ 0, -1, -2, -5, -3, -10, -30, 1, 2, 3, 4]

console.log(contarNegativos(vetor))