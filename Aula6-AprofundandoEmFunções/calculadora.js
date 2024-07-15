//função da calculadora
function calculadora(){
    const operaçao = Number(prompt('Escolha a operação:\n 1 - Soma(+) \n 2 - Subtração(-) \n 3 - Divisão(*) \n 4 - Multiplicação(/) \n 5 - Divisão inteira(%) \n 6 - Potenciação(**)'));
    //checando se a operação é válida
    if(!operaçao || operaçao >= 7){
        alert('operação inválida, tente novamente.');
        calculadora();
    } else {
        //variáveis de entrada de valores 
        let n1 = Number(prompt('Ensira o primeiro valor.'));
        let n2 = Number(prompt('Ensira o segundo valor.'));
        let resultado;
        //verificando variáveis
        if(!n1 || !n2){
            alert('valores inválidos, tente novamente.');
            calculadora();
        } else{
            //funções de operações 
            function soma(){
                resultado = n1+n2;
                alert(`${n1} + ${n2} = ${resultado}`);
            }
            function subtração(){
                resultado = n1-n2;
                alert(`${n1} - ${n2} = ${resultado}`);
            }
            function divisão(){
                resultado = n1/n2;
                alert(`${n1} / ${n2} = ${resultado}`);
            }
            function multiplicação(){
                resultado = n1*n2;
                alert(`${n1} * ${n2} = ${resultado}`);
            }
            function divisãoInteira(){
                resultado = n1%n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é = ${resultado}`);
            }
            function potenciação(){
                resultado = n1**n2;
                alert(`${n1} elevado a ${n2} = ${resultado}`);
            }
            //verificação de operação 
            switch(operaçao){
                case 1:
                    soma();
                    break;
                case 2:
                    subtração();
                    break;
                case 3: 
                    divisão();
                    break;
                case 4:
                    multiplicação();
                    break;
                case 5:
                    divisãoInteira();
                    break;
                case 6:
                    potenciação();
                    break;
            }
            //nova operação
            novaOperaçao();
            function novaOperaçao(){
                let opçao = Number(prompt('deseja fazer uma nova operação? \n 1 - sim \n 2 - não'));
                if (opçao == 1){
                    calculadora();
                } else if(opçao == 2){
                    alert('Adeus!');
                } else {
                    alert('erro, digite uma opção válida');
                    novaOperaçao();
                }
            }
            }
        }
}
calculadora();