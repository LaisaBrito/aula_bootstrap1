function calculadora () {
    const operacao = prompt('escolha uma operação: \n 1 - soma (+) \n 2 - subtração(-) \n 3- multiplicação (*) \n 4- divisão real(/) \n 5- divisão inteira (%) \n 6- potenciação (**)');

    if (!operacao || operacao > 6){
        alert ('operação inválida!');
        calculadora();
        
    } else{

    let n1 = Number(prompt ('insira primeiro valor:'));
    let n2 = Number(prompt ('insira segundo valor:'));
    let resultado;

function soma (){
    resultado = n1 + n2;
    alert (`${n1} + ${n2} = ${resultado}`)
    novaOperacao();
}

function subtração (){
    resultado = n1 - n2;
    alert (`${n1} - ${n2} = ${resultado}`)
    novaOperacao();
}

function multiplicação (){
    resultado = n1 * n2;
    alert (`${n1} * ${n2} = ${resultado}`)
    novaOperacao();
}

function divisãoInterira (){
    resultado = n1 % n2;
    alert (`o resto da divisão inteira entre ${n1} e ${n2} é igual a ${resultado}`)
    novaOperacao();
}

function divisãoReal (){
    resultado = n1 / n2;
    alert (`${n1} / ${n2} = ${resultado}`)
    novaOperacao();
}

function potenciacao (){
    resultado = n1 ** n2;
    alert (`${n1} elevado a ${n2} é igual a ${resultado}`)
    novaOperacao();
}

function novaOperacao(){
    let opcao = prompt ('deseja fazer outra operação?\n 1-Sim \n 2- Não');
    if (opcao == 1) {
        calculadora();
    } else if(opcao == 2){
        alert ('até mais!')
    } else {
        alert ('digite opção válida')
        novaOperacao();
    }
}

if (operacao == 1){
    soma();  
}else if (operacao == 2){
    subtração();
}else if (operacao == 3){
    multiplicação();
}else if (operacao == 4){
    divisãoReal();
}else if(operacao == 5){
    divisãoInterira();
}else if(operacao == 6){   
    potenciacao();
}
   
}
}

calculadora ();