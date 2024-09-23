const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf:'12345678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5561998697879', '55619987689'],
    enderecos:[{
        rua: 'Rua Joseph Climber',
        numero: '45',
        complemento: 'apto 43'
    }]
}

estudante.enderecos.push({
    rua: 'Dona Clotilde',
    numero: '71',
    complemento: null
})

//console.log(estudante.enderecos);
//console.log(estudante.enderecos[1]);

const listaEnderecosComComplemento =  estudante.enderecos.filter((endereco) => endereco.complemento);

console.log(listaEnderecosComComplemento);

