var jogador1 = 1;
var jogador2 = 0;
var placar;

/*switch (placar) {
    case placar = jogador1 > jogador2:
        console.log ('Jogador 1 ganhou a partida');
        break;
    case placar = jogador2 > jogador1:
        console.log ('Jogador 2 ganhou a partida');
        break;
    default: 
    console.log ('Ninguem ganhou');    
}*/

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',};

//for executa a instrução até que ela seja falsa
for (let indice = 0; indice < array.length; indice++){
    console.log (indice);
} 

for(let i in array){
    console.log(i);
}

for(i in object){
    console.log (i);
}

for(i of array){
    console.log (i)
}

//while executa a instruçnao enquanto for verdadeira