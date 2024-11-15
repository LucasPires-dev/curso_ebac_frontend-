function Pessoa (nome, sobrenome, email ) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.email = email
}

function Aluno (nome, sobrenome, email, matricula, expediente) {

    const _matricula = matricula
    this.expediente = expediente

    Pessoa.call(this, nome, sobrenome, email) 

    this.getMatricula = () => {
        return `A matricula de ${nome} é: ${_matricula}.`
    }


}

function Funcionario(nome, sobrenome, email, expediente, credeciais, salario){
    let _credeciais = credeciais
    let _salario = salario
    this.expediente = expediente

    Pessoa.call(this, nome, sobrenome, email) 

    this.getCredeciais = () => {
        return _credeciais
    }
    this.getSalario = () => {
        return _salario
    }

    this.setSalario = (newValue) => {
        _salario = newValue
    }

}


function Professor (nome, sobrenome, email, expediente, credeciais, salario) {

    Funcionario.call(this, nome, sobrenome, email, expediente, credeciais, salario) 
    
    this.aumentoSalarial = () => {
        novoSalario = (this.getSalario() * 1.10).toFixed(2)
        this.setSalario(novoSalario)
        console.log(novoSalario)
    }
}

function Diretor (nome, sobrenome, email, expediente, credeciais, salario) {

    Funcionario.call(this, nome, sobrenome, email, expediente, credeciais, salario) 

    this.aumentoSalarial = () => {
        novoSalario = (this.getSalario() * 1.15).toFixed(2)
        this.setSalario(novoSalario)
        console.log(novoSalario)
    }
}



const Joao = new Pessoa('João', 'Souza', 'joaosouza@email.com')

const Andre = new Aluno('André', 'Souza', 'andresouza@email.com', '0000007', '7:00 - 15:00')
const Maria = new Aluno('Maria', 'Souza', 'mariasouza@email.com', '0000008', '9:00 - 17:00')


const Joana = new Professor('Joana', 'Dark', 'JoaninhaDarkzada@email.com', '06:00 - 18:00', {usuario: 'Joana Dark', senha: '1234'}, 3500)

const Suzana = new Diretor('Suzana', 'Amaral', 'SuzanaAmaral@email.com', '06:00 - 18:00', {usuario: 'susamaral', senha: '1234'}, 7000)

console.log(Joao)

console.log(Andre.email)

console.log(Maria.nome)

console.log(Joana)
console.log(Joana.getCredeciais())
console.log(Joana.getSalario())
Joana.aumentoSalarial()
console.log(Joana.getSalario())

console.log(Suzana.getSalario())
Suzana.aumentoSalarial()
console.log(Suzana.getSalario())
console.log(Suzana.getCredeciais())
