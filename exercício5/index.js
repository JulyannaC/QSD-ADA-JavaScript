//5- Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
// Um número primo é aquele que é divisível somente por ele mesmo e por 1.

// Solicita ao usuário para inserir um número inteiro
let numero = parseInt(prompt("Digite um número inteiro:"));

// Função para verificar se o número é primo
function ehPrimo(num) {
    // Um número primo é maior que 1
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            // Se for divisível, não é primo
            return false;
        }
    }

    // Se não foi encontrado nenhum divisor, é primo
    return true;
}

// Verifica se o número fornecido é primo e exibe o resultado
if (ehPrimo(numero)) {
    alert(`${numero} é um número primo.`);
} else {
    alert(`${numero} não é um número primo.`);
}
