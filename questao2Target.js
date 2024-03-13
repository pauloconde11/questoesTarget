/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;


*/



function efibonacci(num){
        let a = 0;
        let b = 1;
    
    while (b < num) {
        let temp = b;
        b = a+b;
        a = temp;
    }      

    return b == num;
}

function checagem(){

    let numero = parseInt(prompt("Digite um numero para avaliar se pertence a sequência Fibonacci"));

    if (efibonacci(numero)) {
        console.log("Pertence a sequência Fibonacci");
    } else {
        console.log("Não pertence a sequência Fibonacci");
    }
}

checagem();
