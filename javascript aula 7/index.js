//CLASSES

let aluno01 = {nome: 'Guilherme', idade: 23};
let aluno02 = {nome: 'Francisco', idade: 45};

class Aluno{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

let aluno01 = new Aluno ('Guilherme', 23);

console.log(aluno01);

class Tarefa{
    constructor(id, titulo, descricao, conclusao){
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.conclusao = conclusao;
    }
}

let tarefa01 = new Tarefa(1, 'Ir na padaria', 'Comprar pão, leite, bolacha e café', false);

console.log(tarefa01);

class Animal{
    constructor(nome, idade, raca){
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
    }

    fazerBarulho(){
        console.log('O animal faz barulho');
        //ou console.log(`${this.nome} faz barulho`);
    }
}

import Animal from './Animal.js';

let cachorro = new Animal('Totó', 5, 'Brazilian Caramel');

console.log(cachorro);

cachorro.fazerBarulho();

//Abstração (transformar as coisas em objetos computacionais), Encapsulamento
//Herança, Polimorfismo

export default class Animal


function processarArray(array, criteriodeFiltro, transformacao){
    const numerosFiltrados = array.filter(criteriodeFiltro);
    const numerosTransformados = numerosFiltrados.map(transformacao);
    //map cria um novo array

    return numerosTransformados;
}

//arrow function
//const filtroDeNumerosPares = (numero) => {
function filtroDeNumerosPares(numero){
    return numero % 2 === 0;
}



function transformacaoAoQuadrado(numero){
    if(numero % 2 !== 0){
        return numero * numero;
    }
    return numero;
    //se for par retorna apenas o número
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = processarArray(numeros, filtroDeNumerosPares, transformacaoAoQuadrado);

console.log(resultado);

//import {processarArray} from "./Funcoes.js";
//export { processarArray, filtroDeNumerosPares}
