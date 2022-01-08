let dobro = function(a){
    return 2*a
}

dobro = (a) => {
    return 2*a
}
// posso tirar os parêntesis se eu tiver um unico parametro
// quando eu retiro as chaves eu tenho um retorno implicito

dobro = a => 2*a
console.log(dobro(Math.PI))

let ola =function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // significa que possui um param e na hora de chamar eu posso ignorar se eu quiser
console.log(ola())