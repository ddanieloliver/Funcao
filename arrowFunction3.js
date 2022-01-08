let comparaComThis = function (param) {
    console.log(this === param)
}
//o this dentro do escopo da função normal mexe com o escopo global

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
 // o this acossiado a uma função arrow é um this contextual, então não importa o que eu faça, mesmo se eu usar o bind, o this não vai variar.
