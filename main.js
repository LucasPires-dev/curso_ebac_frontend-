const verificaNumeros = (e) => {

    e.preventDefault();
    const valorA = document.getElementById('numeroA')
    const valorB = document.getElementById('numeroB')
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = (`O número <b>${valorA}</b> é maior que o número <b>${valorB}</b>`)
    const AMaior = parseInt(valorA.value) > parseInt(valorB.value)
    const AIgualB = parseInt(valorA.value) == parseInt(valorB.value)
    console.log(AMaior)
    console.log(AIgualB)
    if(AMaior){
       resultado.style = ""
        resultado.innerHTML = (`O número <b>A</b> é maior que o número <b>B</b>.`)
        resultado.style.backgroundColor = "green"
        resultado.style.color = "white"
    } else if (!AMaior && !AIgualB) {
        resultado.style = ""
        resultado.innerHTML = (`O número <b>B</b> é maior que o número <b>A</b>.`)
        resultado.style.backgroundColor = "red"
        resultado.style.color = "white"
    } else if(AIgualB || valorA === NaN && valorB === NaN) {
        resultado.style = ""
        resultado.style.backgroundColor = "red"
        resultado.style.color = "white"
        resultado.innerHTML = "Os valores de A e B são iguais!"
    }
    resultado.style.display ='block'
}

const submit = document.getElementById('form').addEventListener('submit', verificaNumeros)

