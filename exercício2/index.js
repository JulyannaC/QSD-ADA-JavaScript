//2-Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário,
//mostrando uma mensagem de erro e voltando a pedir as informações.

let nomeUsuario, senha;

do {
    nomeUsuario = prompt("Digite seu nome de usuário:");
    senha = prompt("Digite sua senha:");

    if (senha === nomeUsuario) {
        alert("Erro: A senha não pode ser igual ao nome de usuário. Tente novamente.");
    }
} while (senha === nomeUsuario);

alert("Nome de usuário e senha válidos!");
