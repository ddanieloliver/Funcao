/*Fazer um programa para encontrar todos os pares entre 1 e 100.*/

function paresAte100() {
    for (let i = 1; i <= 100; i++) {
        console.log(i)
        if (i % 2 == 0) {
            console.log("Par")
        } else { console.log("impar") }
    }
}
paresAte100()