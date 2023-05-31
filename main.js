const produtos = [
    {
        nome: 'Teclado',
        valor: 250,
        estoque: 10
    },
    {
        nome: 'Mouse',
        valor: 150, 
        estoque: 20
    }

]

const clientes = [
    {
        nome: 'Kelvin',
        saldo: 1500,
        produtos: []
    },
    {
        nome: 'Karla',
        saldo: 400,
        produtos: []

    }
]

// Criar produto
function criaProduto(nome, valor, estoque) {
    const obj = {nome: nome, valor: valor, estoque: estoque};
    produtos.push(obj);
}

// Ver produtos
function verProdutos() {
    console.log(produtos);
    return produtos;
}

// Atualizar produtos
function atualizaProduto(nome, novoValor, novoEstoque) {

    const index = produtos.findIndex(item => item.nome == nome);
    produtos.splice(index, 1)
    
}

function comprarProduto(nomeProduto, nomeCliente, quantidade) {
    const produtoIndex = produtos.findIndex(item => item.nome == nomeProduto);
    const clienteIndex = clientes.findIndex(item => item.nome == nomeCliente);
    const valorDaCompra = produtos[produtoIndex].valor * quantidade;

    if(clientes[clienteIndex].saldo >= valorDaCompra) {
        clientes[clienteIndex].saldo = clientes[clienteIndex].saldo - valorDaCompra;
        produtos[produtoIndex].estoque = produtos[produtoIndex].estoque - quantidade;
        let i = 1;
        while(i <= quantidade) {
            i++;
            clientes[clienteIndex].produtos.push(nomeProduto)
        } 

    } else {
        console.log('Saldo insuficiente')
    }

    if(novoValor) {
        produtos[index].valor = novoValor;
    } if(novoValor) {
        produtos[index].estoque = novoEstoque;

    }
}

comprarProduto('Teclado', 'Kelvin', 25);
// criaProduto('Monitor', 500, 1000);
// verProdutos();