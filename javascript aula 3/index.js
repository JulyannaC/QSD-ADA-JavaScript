// const nomes = ["Amanda", "Paulo", "Ricardo", "Ana", "Pedro"];

// const contatos = ["83993045888", "1692315678", "11988564321", "16998567432", "83993075462"];

// for(let i = 0; i < nomes.length; i++){
//     console.log(`nomes: ${ nomes[i]} \ncontatos: ${contatos[i]}`);
// }

// //OBJETO

// const contato = {
//     nome: "Francisco"
//     numero: '999999999'
//     endereco: 'Rua sem nome, n1'
// }

// console.log(contato);

// console.log(contato.nome);

const contatos = [
                    {nome: 'Francisco', telefone: '999999999'},
                    {nome: 'Beatriz', telefone: '888888888'},
                    {nome: 'Thamires', telefone: '777777777'},
                    {nome: 'João', telefone: '666666666'},
                ]

for( let i = 0; i< contatos.length; i++){
    console.log (`Nome: ${contatos[i].nome}\nTelefone: ${contatos[i].telefone}`);
}

contatos[0].endereco = 'Rua sem nome, n1';
console.log(contatos[0]);

contatos.push({ nome: 'João', telefone: '555555555', endereco: 'Rua'});

console.log(contatos);

let contatoFrancisco = contatos.filter(contato => contato.nome =='Francisco');

console.log(contatoFrancisco);

//CONDICIONAIS

let temSol = false

if (temSol){
    console.log('Posso ir à praia!');
} else {
    console.log('Vou ficar em casa: (');
}

let idade = 14;

if (idade>= 18){
    console.log("Já pode beber álcool");
} else {
    console.log ("Só pode beber suco");
}

let idade = 3;

if (idade >= 18 && idade <= 99){
    console.log ("Já pode beber álcool");
} else if (idade >= 2){
    console.log ("Só pode beber suco");
} else {
    console.log ("Só pode beber leite");
}

//OPERADORES DE COMPARAÇÃO: > < >= <= == === != (operador de desigualdade) &&(operador logico e) || (ou)

//Elementos que se comportam como verdadeiro e como falso mas não necessariamente são booleanos: Truthy e falsy
//0, null, undefined, NaN, "" => false

let idade = 18;

switch(true){
    case idade >= 18 && idade <= 99:
        console.log ("Já pode beber álcool");
        break; //para e sai do switch
    case idade >= 3:
        console.log ("Só pode beber suco");
        break;
    case idade >= 2:
        console.log ("Só pode beber leite");
        break;
    default:
        console.log('Só pode mamar');
        break;
}

let sinal = 'azul';

switch(sinal){
    case 'verde':
        console.log('Pode avançar');
        break;
    case 'amarelo':
        console.log('Atenção');
        break;
    case 'vermelho':
        console.log('Pare!');
        break;
    default:
        console.log('Sinal quebrado');
        break;
}

//OPERADOR CONDICIONAL TERNÁRIO

idade = 18;

if(idade >= 18){
    console.log("Já pode dirigir");
} else{
    console.log("Não pode dirigir");
}

idade >= 18 ? console.log("Já pode dirigir") : console.log("Não pode dirigir");
//condicional--> ? --> true(executa o primeiro bloco) --> false(executa o segundo bloco).

idade >= 18
? console.log('Adulto')
: idade>= 13
? console.log ('Adolescente')
: idade >=3
? console.log ('Criança')
: console.log('Bebê');