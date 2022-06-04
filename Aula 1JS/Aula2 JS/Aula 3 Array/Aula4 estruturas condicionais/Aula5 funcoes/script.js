function funcao (){
console.log('isso é uma função declarativa')
}
funcao();

var funcao = function funcao (){
console.log ('Sou uma função de expressão')
}
funcao();

var funcao = () => {
    console.log ('sou uma arrow')
}
funcao();