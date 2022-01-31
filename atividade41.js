/* Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A.*/

function resultadoNotas(vetor) {
    let conceitos = []
    for (let i=0; i< vetor.length; i++){
        if( vetor[i] >= 0.0 && vetor[i] <= 4.9){
            conceitos.push('Nota D') 
        } else if( vetor[i] >= 5.0 && vetor[i] <= 6.9){
            conceitos.push('Nota C') 
        } else if( vetor[i] >= 7.0 && vetor[i]  <= 8.9 ){
            conceitos.push('Nota B') 
        }else if( vetor[i] >=9.0 && vetor[i] <= 10.0){
            conceitos.push('Nota A') 
        }else{ 
            conceitos.push('Nota inválida')
        }
    }
    return conceitos
}
let notas = [2.7, 1.1, 10, 21, 6.6, 9.0]
let vetorConceitos = resultadoNotas(notas)
console.log(vetorConceitos)
