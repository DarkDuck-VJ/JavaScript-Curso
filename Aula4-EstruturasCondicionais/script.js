var jogador1=1;
var jogador2=0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log('Jogadores válidos.') : console.log('Jogadores inválidos.');
if (jogador1 > 0 && jogador2 ==0){
    console.log('Jogador 1 marcou ponto.');
    placar = jogador1 > jogador2;
}else if(jogador2 > 0 && jogador2 ==0){
    console.log('Jogador 2 marcou ponto.')
    placar = jogador2 > jogador1;
} else{
    console.log('Ninguem marcou ponto');
}

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 venceu!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 venceu!');
        break;
    default:
        console.log('Empate');
}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let objeto = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

/*for(let i=0; i < array.length; i++){
    console.log(i);
}*/

//for in
for (let i in array){
    console.log(i);
}
for (i of array){
    console.log(i);
}

let a = 0;
/*while (a<10){
    a++;
    console.log(a);
}*/

do {
    a++;
    console.log(a);
} while(a<10);