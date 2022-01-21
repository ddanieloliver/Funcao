/* Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.*/
function imparesEpares(vetorDeNumeros) {
    let impares = 0
    let pares = 0
    for (let i = 0; i < vetorDeNumeros.length; i++) {
        if (vetorDeNumeros[i] % 2 == 0) {
            pares++
        } else { impares++ }
    }
    console.log(`${impares} impares e ${pares} pares`)
}
let vetor1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let vetor2 = [22, 2, 3, 4, 5, 6, 7, 41, 94, 111, 18, 16, 14]

imparesEpares(vetor1)
imparesEpares(vetor2)