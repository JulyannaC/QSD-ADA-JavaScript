let estoque = [];

function adicionarProduto() {
    let nome = prompt("Insira o nome do produto: ");
    let preco = parseFloat(prompt("Digite o valor do produto: ").replace(",", ".")
);
    let quantidade = parseInt(prompt("Digite a quantidade do produto: "));

const produto = {
    nome: nome,
    preco: preco,
    quantidade: quantidade,
    };

    estoque.push(produto);

    console.log(`Produto "${nome}" adicionado ao estoque.`);

    function calcularTotal() {
    let total = 0;

    for (let i = 0; i < estoque.length; i++) {
      total += estoque[i].preco * estoque[i].quantidade;
    }

    return total;
    }

    console.log(estoque);

    const totalEstoque = calcularTotal();
    console.log(`O preço total do estoque é: R$${totalEstoque.toFixed(2)}`);
}
