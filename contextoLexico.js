 const valor = 'Global'

 function minhaFuncao() {
     console.log(valor)
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}
exec() // a função guarda o contexto no qual foi inserida, ou seja, nesse caso, o esperado seria que exec() mostrasse 'Local' ao inves de global, jaá que local foi a contante amis proxima de onde ela esdtava sendo executada, Porem, Global ero o que estava amis proximo dee onde ela foi declarada.
