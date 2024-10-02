// 1 e 2 -

const estudante = require('./estudante.json');

console.log(estudante);
console.log(estudante.nome);

console.log(typeof estudante);

// 3 -

const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
}

const stringProduto = JSON.stringify(produto);
console.log(stringProduto);
console.log(typeof stringProduto);
