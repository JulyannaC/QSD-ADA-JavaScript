//3 - Faça um programa que leia 5 números e informe o maior número.

const numeros = [];

for (let i = 1; i <= 5; i++) {
    const num = parseFloat(prompt(`Informe o ${i}º número::`));
    numeros.push(num);
}

const maiorNumero = Math.max(...numeros);

alert(`O maior número é: ${maiorNumero}`);

