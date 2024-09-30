// 1 e 2 -

const pessoa = {
    nome: 'Maiara',
    idade: 21,
    solteiro: true,
    hobbies: ['Dançar', 'Caminhar', 'Jogar', 'Viajar']
}

pessoa.endereco = {
    rua: 'Rua sem nome',
    cidade: 'Samambaia',
    estado: 'Distrito Federal'
}

function mostrarInfoPessoa(pessoa){
    console.log(`${pessoa.nome} ${typeof pessoa.nome}`);
    console.log(`${pessoa.idade} ${typeof pessoa.idade}`);
    console.log(`${pessoa.solteiro} ${typeof pessoa.solteiro}`);
    console.log(`${pessoa.hobbies} ${typeof pessoa.hobbies}`);
    console.log(`${pessoa.endereco.rua}`);
    console.log(`${pessoa.endereco.cidade}`);
    console.log(`${pessoa.endereco.estado}`);
    
}

mostrarInfoPessoa(pessoa);

// 3 - 

console.log('**************************************');


const pessoas = [
    {nome: 'Maiara', idade: 21, cidade: 'Brasilia'},
    {nome: 'Gustavo', idade: 27, cidade: 'Samambaia'},
    {nome: 'Carlos', idade: 23, cidade: 'Planaltina'},
]

pessoas.push = {nome: 'Andressa', idade: 15, cidade: 'Curitiba'}

function mostrarListaPessoas(pessoas){
    pessoas.forEach(pessoas => {
        console.log(`Nome: ${pessoas.nome}, Idade: ${pessoas.idade}, Cidade: ${pessoas.cidade}`);
    });

}

mostrarListaPessoas(pessoas)