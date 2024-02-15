console.log("Hello World!");

//No javascript se usava o var

var nome = 'Julyanna';
nome = "Francisco"

//constante

//const sobrenome= "Andrade";

//const PI = 3.14;

//DRY- DON'T REPEAT YOURSELF

console.log("Hello" + nome + "!");
console.log("Hello" + nome + "!");
console.log("Hello" + nome + "!");
console.log("Hello" + nome + "!");
console.log("Hello" + nome + "!");

nome= "Joao"
//a partir do nome Joao ele muda
console.log("Hello" + nome + "!");
console.log("Hello" + nome + "!");
console.log("Hello" + nome + "!");
console.log("Hello" + nome + "!");

//se você usar ` é possível escrever pulando linhas ou descendo para outra linha

console.log(`Hello ${nome} ${sobrenome}!`);

// O $ chama a variável

//Em javascript o ; é opcional. Porém é boa prática usá-lo//
//Ctrl; ou ctrl kc para comentar

var ligado = true ---> //pode ser usada posteriormente no código para armazenar e manipular o estado "ligado" em relação a alguma lógica ou funcionalidade específica.

//string: nomes, endereço, número de telefone..em resumo, um conjunto de letras.
//number: decimal, inteiro
//boolean
//null (vazio)
//undefined
//NaN (not a number)


//Linguagem fortemente tipada: C, Java, C#, Python

//Essas acima são necessárias especificar o tipo de variável

// Linguagem fracamente tipada: Javascript (não precisa especificar a variável, apenas o typescript)



var nome = '1'; //string

var numero = 1;

var sobrenome  = "1"; //number

//não se usa mais var no js, é usado let

console.log(nome + sobrenome);

const sobrenome = "Fagundes" + nome;

const PI = 3.14; //number

var ligado = true; //boolean

// DRY 

// console.log(`Hello ${nome}!`);
// console.log("Hello " + nome + " " + sobrenome);
// console.log("Hello " + nome + " !");
// console.log("Hello " + nome + " !");
// nome = "Joao";
// console.log("Hello " + nome + " !");
// console.log("Hello " + nome + " !");
// console.log("Hello " + nome + " !");
// nome = true;
// console.log("Hello " + nome + " !");

//FUNÇÕES:

console.log("Hello World!");
//imprimi informações na tela. MAIS USADO!

console.error("Error");
//imprimi a mensagem error

console.warn("Aviso!");
//avisos.

console.table(['Azul', 'Amarelo', 'Vermelho']);
//elaborar tabelas;
//dentro do parênteses temos um array

//Conversão de funções (ex: número em string e vice-versa)

let numero01 = parseFloat('1.2');
//parseFloat: converte string em um número de ponto flutuante

let numero02 = parseInt('5');
//parseInt:converte uma string em um inteiro

console.log(numero02);

//OUTRAS FUNÇÕES

let nome = 'Francisco';
console.log(nome.replace('o', 'a'));
//nome.replace: substitiui letras

let sobrenome = 'Fagundes';
console.log(nome.concat(sobrenome));
//nome.concat:concatenação--> junta as strings (nome com sobrenome)

console.log(nome.toLowerCase());
//nome.toLowerCase: pega todos os caracteres e converte em letra minúscula.

console.log(nome.toUpperCase());
//nome.toUpperCase: pega todos os caracteres e converte em letra maiúscula.

console.log(nome.charAt(6));
//nome.charAt:seleciona a posição do caractere, nesse caso, posição 6.

console.log(nome.length);
//nome.lenght: pega o tamanho de um objeto (string), quantidade de caracteres.

console.log(nome.includes('Far'));
//nome.includes():retorna TRUE se durante a busca na string um pedaço da string(substring) ou caractere aparece na posição principal, senão retorna FALSE.

//FUNÇÕES-NÚMERO (biblioteca MATH)

console.log(Math.PI);
//traz o valor de PI

console.log(Math.floor(1.4))
//arredonda para um número para baixo, menor ou igual ao número que foi indicado

console.log(Math.round(1.5));
//acima do número 5, arredonda para cima e abaixo do número 5 para baixo.

console.log(Math.max(1, 3, 50, 120));
//retorna o maior número de um conjunto de números fornecidos

//OPERAÇÕES + - * /

//vai receber o primeiro numero
let numero01 = parseInt(prompt('Digite o primeiro número'));
//a função prompt exibe uma mensagem para o usuário. É necessário colocar o parseInt para transformar os números em inteiros, senão o js pensa que estamos tratando de uma string e "junta" os números.
console.log(numero01);

let numero02 = parseInt(prompt('Digite o segundo número:'));
console.log(numero02)

//calcular média
let media = (numero01 + numero02) / 2;

console.log(media);