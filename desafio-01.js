// 1- 

const livro = {
    titulo: 'Harry Potter e a Pedra Filosofal',
    autor: 'J. K. Rowling',
    anoPublicacao: 1997,
    genero: 'Fantasia'
}

const anoAtual = new Date().getFullYear();
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

livro.genero = 'Aventura';
livro.avaliacao = null;

delete livro.avaliacao;

console.log(`Detalhes do livro:
    Titulo: ${livro.titulo}
    Autor: ${livro.autor}
    Ano da Publicação: ${livro.anoPublicacao}
    Genero: ${livro.genero}
    Idade Publicação: ${livro.idadePublicacao}
    ${livro.avaliacao}
    `);








