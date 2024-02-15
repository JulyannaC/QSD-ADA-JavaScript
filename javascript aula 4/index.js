// ??- Mostra uma resposta de for válida

console.log(null ?? 'Vai me retornar');
console.log(undefined ?? 'Vai me retornar');
console.log('Agora vai me retornar' ?? 'Agora não me retorna');
console.log('Teste' ?? 'Não vai me retornar');
console.log(10 ?? 'Não vai me retornar');

// &&- Mostra a resposta se for undefined ou null

console.log (null && 'Não vai me retornar');
console.log (undefined && 'Não vai me retornar');
console.log (true && 'Eu sou retornado');

//LOOPS
//for

for(let i=0; i < 10; i++){
    console.log("Hello");
}

//while

let contador = 0;

while(contador < 10){
    console.log("Hello");
    contador++;
}

let numero = prompt('Digite um número par:');

while(numero % 2 !=0){
    numero= prompt(' 0 $ {numero} não é par, digite novamente:');
}

//FUNCTIONS

function numeroRandomico(min, max){
    return Math.floor(Math. random() * (max - min + 1) + min);
}

const numeroSorteado = numero.Randomico(1, 10);
console.log('Numero sorteado', numeroSorteado);

let palpite = parseInt(prompt('Digite um número entre 1 e 10:'));

while(palpite !== numeroSorteado){
    console.log('Você não acertou o número escolhido, tente novamente...');
    palpite = parseInt(prompt('Digite um número entre 1 e 10:'));
}

console.log('Você acertou! O número sorteado foi o ${numeroSorteado}');

let palpite = 0;

do{
    palpite = parseInt(prompt('Digite um número entre 1 e 10:'));
    if (palpite !== numeroSorteado){
        console.log('Tente novamente');
    }
}

while(palpite !== numeroSorteado);

alert('Você acertou! O número sorteado foi o ${numeroSorteado}');

let n1 = parseInt(prompt('Digite um número'));
let n2 = parseInt(prompt('Digite um número'));

let contador = 0;
let soma = 0;
let aux = 0;

if(n1 > n2){
    aux = n1;
    n1 = n2; 
    n2 = aux;
}

while(contador != n2){
    let variavel = n1 + contador;
    if(variavel % 2 == 0){
    soma = variavel + soma;
    }
    contador++
}

console.log(`A soma dos números pares entre ${n1} e ${n2} é igual: ${soma}`);


//alert ('Você acertou! O número sorteado foi o ${numeroSorteado}');

//Fatorial de um número

let numero = parseInt(prompt('Digite um número:');)

let fatorial = 1;
let contador = 1;

while(contador <= numero){
    fatorial *= contador;
    contador++;
}

console.log(`O fatorial do número ${numero} é igual a ${fatorial}`);

//Sequência de Fibonacci 1 1 2 3 5 8 13 21 34 55 89 144

let limite = parseInt(prompt('Até que número você quer calcular a sequencia de Fibonacci'));

let primeiroTermo = 0;
let segundoTermo = 1;

let resultado = primeiroTermo + ' ' + segundoTermo;

while(segundoTermo < limite){
    let proximoTermo = primeiroTermo + segundoTermo;
    resultado += ' ' + proximoTermo;

    primeiroTermo = segundoTermo;
    segundoTermo = primeiroTermo;
}

console.log(`A sequencia de Fibonacci até ${limite} é ${resultado}`);

//For, for in, for of

const numeros = [1, 2, 3, 4, 5];

for(indice in numeros){
    console.log(indice, numeros[indice]);
}
//mostra os índices

for(valor of numeros){
    console.log(valor, numeros.indexOf(valor));
}
//mostra os valores

let familiaFagundes = ['Francisco', 'Patricia', 'Luiza', 'Luan'];

for (nome of familiaFagundes){
    console.log (nome + "Fagundes");
}

familiaFagundes.forEach(membroDaFamília =>{
    console.log(membroDaFamília.nome);
});

let familiaFagundes = [ 
    {nome: 'Francisco', idade: 45, parentesco: 'pai'},
    {nome: 'Patricia', idade: 39, parentesco: 'mãe'}
];

let pai = familiaFagundes.find(membroDaFamília => membroDaFamília.parentesco == "pai");

console.log(`O pai da família Fagundes é o ${pai.nome}`);

const numeros01 = [10, 20, 30, 40, 50];
const numeros02 = [11, 20, 30, 40, 50];

const ehPar = num => num % 2 === 0;

const numeros01SaoPares = numeros01.every(ehPar);
const numeros02SaoPares = numero02.every(ehPar);

console.log(numeros01SaoPares);
console.log(numeros02SaoPares);

const alunos = [
    {nome: 'Francisco', nota: '10'},
    {nome: 'Patricia', nota:'9'},
]

const notaDeCorte = 6;

const reprovados = alunos.filter(aluno => aluno.nota < notaDeCorte);
const nomesDosReprovados = reprovados.map(aluno => aluno.nome);
console.log(nomesDosReprovados);



