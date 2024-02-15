//4 - Faça um programa que leia 5 números e informe a soma e a média dos números.

let soma = 0;
let media = 0;


for (let i = 1; i <= 5; i++) {
    let numero = parseFloat(prompt(`Informe o ${i}º número:`));

    soma += numero;
}

media = soma / 5;

alert(`A soma dos números é: ${soma}\nA média dos números é: ${media}`);
