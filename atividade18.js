/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano /Aumento
   A    10%
   B    15%
   C    20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
 */

function calcularSalario(plano){
   let salario = 2500
   switch(plano){
      case 'a': return salario *1.1
         break
      case 'b': return salario * 1.15
         break
      case 'c': return salario *1.2
      default: return "Isso é um plano inválido"
   }
}
console.log(calcularSalario('a'))
console.log(calcularSalario('b'))
console.log(calcularSalario('c'))