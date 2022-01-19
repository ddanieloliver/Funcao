function calcularCrescimento(alturainicial1, taxa1, alturainicial2, taxa2) {
    if (alturainicial1 == alturainicial2) {
        if (taxa1 > taxa2) {
            return "A criança 1 ultrapassará a criança 2 em 1 ano."
        } else if (taxa1 < taxa2) {
            return "A criança 2 ultrapassará a criança 1 em 1 ano."
        } else {
            return "As crianças tem igual taxa de crescimento e altura."
        }
    } else {
        if (alturainicial1 > alturainicial2) {
            if (taxa1 >= taxa2) {
                return "A criança menor não ultrapassará a criança maior."
            } else {
                return `A criança menor ultrapassará a criança maior em ${calcularTempo(alturainicial1, taxa1, alturainicial2, taxa2)}anos.`
            }
        } else {
            if (taxa1 <= taxa2) {
                return "A criança menor não ultrapassará a criança maior."
            } else {
                return `A criança menor ultrapassará a criança maior em ${calcularTempo(alturainicial1, taxa1, alturainicial2, taxa2)}anos.`
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
    let anos = 0
    while (alturaMenor < alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        anos++
    }
    return anos
}

console.log(calcularCrescimento(150, 2, 130, 4))
console.log(calcularCrescimento(150, 4, 130, 2))
console.log(calcularCrescimento(140, 5, 140, 5))
console.log(calcularCrescimento(145, 2, 150, 1))