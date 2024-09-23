const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf:'12345678901',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['5561998697879', '55619987689'],
    media: 7.5,
    estaAprovado: function(mediaBase){
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante.estaAprovado(7));
