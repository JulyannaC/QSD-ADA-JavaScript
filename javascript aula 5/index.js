//FUNÇÕES
let numero01 = 4;
let numero02 = 6;

console.log(numero01 + numero02);

function soma(){

}

function helloWorld(){
    console.log('Hello World!');
}

helloWorld();

//objeto guarda os dados e a função é criada para algo;

function soma(numero01, numero02){
    return numero01 + numero02;
}

let somaDosNumeros = soma(15,30);

console.log(somaDosNumeros);

//objetivo da função: reutilização do código;

//EXERCÍCIOS
function soma(numero01, numero02){
    return numero01 + numero02;
}
console.log(soma(15,2));


function subtracao (numero01, numero02){
    return numero01 - numero02;
}
console.log(subtracao(15,3));


function multiplicacao (numero01, numero02){
    return numero01 * numero02;
}
console.log(multiplicacao(15,4));


function divisao(numero1, numero2) {
    if (numero2 !== 0) {
    return numero1 / numero2;
    } else {
    return "Não é possível dividir por zero.";
    }
}

console.log(divisao(15,0));

let a = parseInt(prompt("Digite o primeiro número"))
let b = parseInt(prompt("Digite o segundo número"))
let escolha = parseInt(prompt("Digite o número da operação desejada. /n 1= soma, 2 = subtração, 3 = multiplicação, 4= divisão."))

switch(escolha){
    case 1:
        console.log(a + b)
        break
    case 2:
        console.log(a + b)
        break
    case 3:
        console.log(a * b)
        break
    case 4:
        console.log(a / b)
        break
    default:
        alert("Digite um número!")
}

//

let cores = ['azul', 'amarelo', 'roxo', 'verde'];

let corAdivinhada = prompt("Adivinhe a cor que está no array!");

let acertou = false;

while (!acertou) {
    for (let i = 0; i < cores.length; i++) {
        if (corAdivinhada === cores [i]) {
            acertou = true;
            break; // sai do for
            }
    }

    if (!acertou) {
        corAdivinhada = prompt ("Adivinhe a cor que está no array!") ;
    }
};

console. log("Parabéns, você acertou!");

//EXEMPLOS

function imprimirNumeros(limit){
    let contador = 0;

    while(contador < limit){
        console.log(`Iteração do while: ${contador}`);
        contador++
    }

    for(let i = 0; i < limit; i++){
        console.log(`Iteração do for: ${i}`);
    }

    const arrayNumeros = [];

    for(let i = 1; i < limit; i++){
        arrayNumeros.push(i);
    }

    console.log(`Array de Números: ${arrayNumeros}`);

    for(indice in arrayNumeros){
        console.log(`Iteração do for in: ${indice}`);
    }
    //for in: for pelos índices

    // [1, 2, 3, 4]
    // indices 0, 1, 2,3
    for (numero of arrayNumeros){
        console.log(`Iteração do for of: ${numero}`);
    }
    //for of: para cada número ele imprime o numero; for pelos valores


    const pessoa = {
        nome: 'João Guilherme',
        idade: 25,
        profissão: 'Engenheiro de Software'
    }

    for(chave in pessoa){
        console.log(`${chave}: ${pessoa[chave]}`);
    }

}

imprimirNumeros(5);

//FUNÇÕES ANÔNIMAS: Não precisa de nenhum nome
//tipo 1
const nomes = ["Guilherme","João", "Julyanna", "Cristina"];

const cristina = nomes.find(function(nome){
    return nome === "Cristina"
});
//

//arrow function
const cristina2 = nomes.find(nome => nome === 'Cristina');

console.log(cristina);
//

//tipo1
function soma(numero01, numero02){
    console.log(numero01 + numero02);
}

soma(30,45);
//

//arrow function
const soma2 = (numero01, numero02) => console.log(numero01 + numero02);

soma(30,45);
//

const consoleLog = () => console.log('Hello World!');

function helloWorld2(){
    console.log('Hello World!')
}

helloWorld();
helloWorld2();

//aroow function
const multiplicacao = (numero01, numero02, numero03) => {
    console.log(numero01 * numero02 * numero03);
    console.log("Este é o resultado da multiplicação");
}

multiplicacao(3, 4, 5);
//

function soma(numero01, numero02){
    return numero01 + numero02;
}

const soma = (numero01, numero02) => numero01 + numero02;

const numerosSomados = soma(13, 78);

console.log(numerosSomados);

//quando usa chaves tem que inserir o return. Se não tiver chaves o return fica implícito.





