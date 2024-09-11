class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const aluno1 = new Aluno('Rebeca', 6);
const aluno2 = new Aluno('Junior', 4);
const aluno3 = new Aluno('Marcus', 5);
const aluno4 = new Aluno('Bruna', 7);
const aluno5 = new Aluno('Guilherme', 8);

const alunos = [aluno1, aluno2, aluno3, aluno4, aluno5];

const media = alunos.filter(function(aluno) {
    return aluno.nota > 5;
}).map(function(aluno) {
    return aluno.nome;
});

console.log(media);