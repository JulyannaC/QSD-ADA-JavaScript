//OPERAÇÕES: + - * / & %

console.log( 10 % 2)

let numeros = [1, 2, 3, 4, 5, 6];
//nessa variável estamos guardando um vetor de vários números

console.log(numeros);

console.log(numeros[2]);

console.log(numeros.length);
//o tamanho do array será o último index do array + 1

let array = [3, 6, 8, "maçã", false, null, undefined];
//permite chamar um array com tipos variados

console.log(array.length);
//7

console.log(array[2]);

array[2] = "banana";
//alterar e/ou atualizar elementos do array.

console.log(array);

const arrayDeValores = [3, 6, 8, "maçã", false, null, undefined];

arrayDeValores[2] = "banana";
arrayDeValores[7] = 'azul';

arrayDeValores.push('casa');
//insere um ou mais elementos ao final de um array;

console.log(arrayDeValores);

arrayDeValores.unshift(true);
//insere um ou mais elementos ao início do array

console.log(arrayDeValores);

arrayDeValores.pop();
//remove o último elemento de um array e retorna esse elemento;

arrayDeValores.shift();
//remove o primeiro elemento de um array e retorna esse elemento;

const animais = ['gato', 'cachorro', 'papagaio', 'gato', 'bode'];

console.log(animais.index0f('gato'));
//usado para encontrar a primeira ocorrência de um elemento em um array. Se o elemento não for encontrado, retornará -1;

console.log(lastIndex0f('gato'));
//busca a última ocorrência; retorna -1 se o elemento não estiver presente no array;

console.log(animais.includes('gato'))
//verifica se um array inclui um determinado elemento. Retorna true se o elemento estiver;

console.log(animais.find(animal => animal= 'gato'))
//encontra o primeiro elemento de um array que satisfaça uma determinada condição. Ele retorna o valor do primeiro elemento que atende à condição ou undefined se nenhum elemento for encontrado.

let pessoa = "Francisco";
pessoa=="Francisco";
//os dois sinais de = indicam comparação

let numero = "1";

console.log(numero === "1");
//os três sinais de = indicam comparação mas verificam se o tipo da função também é igual;

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeros01= numeros.splice;
//remove elementos de um array, retornando os elementos que foram apagados. Também pode inserir elementos na posição dos que foram apagados;

const numeros01 = numeros.splice(3, 3);
//o indice de inicio onde as alterações começam, depois o numero de elementos a serem removidos e um índice opcional que seria o novo elemento a ser adicionado;

console.log(numeros01);

const elementos = new Array(10);
//definir que a array terá 10 elementos;

elementos.fill(1);
//preencher um array

elementos.fill(1, 2, 5)
//preencher com o número 1, começar da posição 2 e ir até a posição anterior a 5

const numeros01 = [1, 2, 3, 4, 5];
const numeros02 = [1, 6, 7, 8, 9, 10];

const numeros03 = numeros01.concat(numeros02);
//junta os dois arrays

console.log(numeros03);

console.log(numeros01);
//não houve modificação no array

const numeros = [1, 2, 3, 4, 5, 6, 7];

console.log(numeros.reverse());
//inverte a ordem dos elementos do array

numeros.filter
//usado para criar um novo array contendo apenas os elementos que atendem a determinada condição.
const numerosPares = numeros.filter(numero => numero % 2 = 0);
//função de callback: o que está dentro dos parêmteses

console.log('Números pares: $ {numerosPares}');;

const numerosImpares = numeros.filter(numero => numero % 2 != 0);

console.log('Números ímpares: $ {numerosImpares}');

const numeros = [ 4, 7, 8, 9, 2, 3];
console.log(numeros);

const numerosEmOrdem = numeros.sort();
//ordena os elementos de um array, considerando que eles são strings.

//para solucionar esse problema usa-se a função: numeros.sort((a,b) => a - b);

console.log(numerosEmOrdem);

//MATRIZES

const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(table[0]);

console.log(table[1][1]);
//o primeiro índice diz respeito ao segundo array e o segundo índice seria referente ao elemento

console.log(table);

let numeros = [1, 2, 3, 4, 5];

console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

for(let i = 0; i <= numeros.length; i++) {
    console.log(numeros[indice]);
}
//começa no índice 0, para quando o i for menor que o tamanho do array. E aí executa-se o comando, console.log.. Esse i++, significa que soma-se ao i +1!

const table = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for(let i=0; i < tabela.length; i++){
    for(let j = 0; j < tabela[i].length; j++)
    {
        console.log(tabela[i][j]);
    }
}

//SPREAD OPERATOR

const numeros01 = [1, 2, 3, 4, 5];

const numeros02 = [...numeros01, 6, 7, 8, 9, 10];
//junta uma array ao outro

console.log(numeros02);

const numeros01 = [1, 2, 3, 4, 5];

const [a, b, c, d, e] = numeros01;

console.log (a);
//faz a associação que o a=1

const[ primeiro, ...resto] = numeros01;
//primeiro número e os "...resto" seria o restante dos números

console.log(primeiro);
console.log(resto);







