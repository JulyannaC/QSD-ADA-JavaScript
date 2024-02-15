// //COMPOSIÇÃO DE FUNÇÕES

// const funcaoComposta = (funcao01, funcao02) => function(){
//     return funcao02(funcao01(...arguments));
// }

// const arredondamento = funcaoComposta(parseFloat, Math.round);

// console.log(arredondamento("10.5"));

// const toUpperCase = string => string.toUpperCase();

// console.log('teste'.toUpperCase());

// console.log(toUpperCase('teste'));

// console.log(Math.round(parseFloat("10.5")));

// //FUNÇÃO DE ALTA ORDEM

// const somar = (a, b) => a + b;
// const subtrair = (a, b) => a - b;
// const multiplicar = (a, b) => a * b;
// const dividir = (a, b) => a / b;

// const calcular = (operacao, a, b) => operacao(a, b);

// const resultado = calcular(somar, 1, 2);
// console.log(resultado);


// const processarArray = (funcaoDeProcessamento, array) => {
//     const resultado = [];
//     array.forEach(element => {
//         resultado.push(funcaoDeProcessamento(element));
//     });
//     return resultado;
// }

// const dobrarValor = (valor) => {
//     return valor * 2;
// }

// const quadradoDoValor = (valor) => {
//     return valor * valor;
// }

// console.log(processarArray(dobrarValor, [1, 2, 3, 4, 5]));




// //Exercicio

// //FUNÇÃO DE COMPOSTA

// // Função 1: Multiplicar por 2
// function dobrarNumero(numero) {
//     return numero * 2;
// }

//   // Função 2: Adicionar 5
//     function adicionarCinco(numero) {
//     return numero + 5;
// }

//   // Função composta: Dobrar e depois adicionar 5
//     function funcaoComposta(valor) {
//     var resultadoDobrado = dobrarNumero(valor);
//     var resultadoFinal = adicionarCinco(resultadoDobrado);
//     return resultadoFinal;
// }

//   // Exemplo de uso
//     var numeroInicial = 3;
//     var resultadoFinal = funcaoComposta(numeroInicial);

//     console.log("Número inicial: " + numeroInicial);
//     console.log("Resultado final: " + resultadoFinal);



// //FUNÇÃO DE ALTA ORDEM

// // Função de ordem superior que executa uma função duas vezes
// function executarDuasVezes(funcao, valor) {
//     return funcao(funcao(valor));
// }

//   // Função para dobrar um número
//     function dobrar(numero) {
//     return numero * 2;
// }

//   // Exemplo de uso
//     var numeroInicial = 5;

//     var resultado = executarDuasVezes(dobrar, numeroInicial);

//     console.log("Número inicial: " + numeroInicial);
//     console.log("Resultado final: " + resultado);
// //


const alunos = [
    {nome: 'Patricia', idade: 20, sexo: "feminino"},
    {nome: 'Guilherme', idade: 23, sexo: "masculino"},
    {nome: 'Joao', idade: 18, sexo: "masculino"},
    {nome: 'Sophia', idade: 21, sexo: "feminino"}
];

const filtrarAlunos = (array, funcaoDeFiltro) => {
    return array.filter(filtro);
}

const filtroMaiorque20 = (aluno) =>{
    return aluno.idade > 20;
}

const filtroNomeComecaComS = (aluno) => {
    return aluno.nome.startsWith('S');
}

const filtroPorSexoFeminino = (aluno) => {
    return aluno.sexo === 'feminino';
}

console.log(filtrarAlunos(alunos, filtroMaiorque20));

// console.log(alunos.filter(pessoa => pessoa.idade >= 23));

//TRY CATCH FINALLY
//uma forma de tentar pegar os erros dentro da aplicação. Usado muito em APIs (backend)

try{
    //executou um bloco de comandos

    throw new Error("Erro no try");
} catch (error) {
    console.log(error.name, error.message);
}

const dividirNumeros = (numeros01, numeros02) => {
    
    try {
        if(numeros02) = 0 {
            throw new Error('Divisão por zero não é permitida.');
        }
        console.log(numero01 / numero02);
        return numero01 / numero02;
        //se executar esse return e consolelog, ele pula pro finally
    } catch (error) {
        console.log('ocorreu um erro:', error.message);
    } finally {
        console.log("Finally executado");
    }
}

console.log(dividirNumeros(4, 0));
