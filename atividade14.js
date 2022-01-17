/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

function diaSemana(dia){
    switch(dia){
        case 1: console.log('Domingo')
        console.log('Fim de semana')
        break
        case 2: console.log('Segunda-Feira')
        console.log('Dia útil')
        break
        case 3: console.log('Terça-Feira')
        console.log('Dia útil')
        break
        case 4: console.log('Quarta-Feira')
        console.log('Dia útil')
        break
        case 5: console.log('Quinta-Feira')
        console.log('Dia útil')
        break
        case 6: console.log('Sexta-Feira')
        console.log('Dia útil')
        break
        case 7: console.log('Sábado')
        console.log('Fim de semana')
        break
        default: console.log('Dia inválido')
    }
}
+
diaSemana(1)
diaSemana(2)
diaSemana(3)
diaSemana(4)
diaSemana(5)
diaSemana(6)
diaSemana(7)
diaSemana('d')

