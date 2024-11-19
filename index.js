// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

// • Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma. 

const notasAlunos = [
    {
        nome: 'Maria',
        nota: 7.5
    },
    {
        nome: 'João',
        nota: 6
    },
    {
        nome: 'Miguel',
        nota: 9
    },
    {
        nome: 'Matheus',
        nota: 4
    },
    {
        nome: 'Pedro',
        nota: 5.5
    },
]

const PegarAprovados = () => notasAlunos.filter(aluno => aluno.nota >= 6)

console.log(PegarAprovados())