//1- Faça um programa que peça uma nota, entre zero e dez.
//Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

let nota;
do {
    nota = parseInt(prompt("Por favor, informe uma nota entre 0 e 10:"));
    if (nota < 0 || nota > 10) {
    alert("Nota inválida! Tente novamente.");
}

} while (nota < 0 || nota > 10);


alert("Você digitou uma nota válida: " + nota);


