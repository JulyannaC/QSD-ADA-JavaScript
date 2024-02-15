//6 - Altere o programa de cálculo dos números primos, informando, caso o número não seja primo,
// por quais número ele é divisível.

function verificarPrimo(numero) {
    if (numero <= 1) {
        return false; // Números menores ou iguais a 1 não são primos
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            // Se o número for divisível por algum número diferente de 1 e ele mesmo
            return {
                primo: false,
                divisivelPor: i
            };
        }
    }

    // Se nenhum divisor foi encontrado, o número é primo
    return { primo: true };
}

// Solicitar um número ao usuário
const numeroUsuario = parseInt(prompt("Digite um número inteiro:"));

// Verificar se o número é primo e exibir o resultado
const resultado = verificarPrimo(numeroUsuario);

if (resultado.primo) {
    alert(`${numeroUsuario} é um número primo.`);
} else {
    alert(`${numeroUsuario} não é um número primo. É divisível por ${resultado.divisivelPor}.`);
}


function ehPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}


