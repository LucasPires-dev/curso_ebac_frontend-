const verificaNumeros = (e) => {

    e.preventDefault();
    const valorA = document.getElementById('numeroA')
    const valorB = document.getElementById('numeroB')
    const resultado = document.getElementById('resultado')
    const AMaior = parseInt(valorA.value) > parseInt(valorB.value)
    const AIgualB = parseInt(valorA.value) == parseInt(valorB.value)
    const error = document.getElementsByClassName('error')[0]
    if(AMaior){
        error.style = ""
        resultado.style = ""
        error.innerHTML = "O número A é maior que o B!"
        error.style.display = "block"
    } else if (!AMaior && !AIgualB) {
        error.style = ""
        resultado.style = ""
        resultado.innerHTML = (`Tudo Certo!`)
        resultado.style.display ='block'
    } else if(AIgualB) {
        error.style = ""
        resultado.style = ""
        error.innerHTML = "Os valores de A e B são iguais!"
        error.style.display = "block"
    }
}

const submit = document.getElementById('form').addEventListener('submit', verificaNumeros)

