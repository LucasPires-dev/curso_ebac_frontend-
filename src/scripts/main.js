document.addEventListener('DOMContentLoaded', ()=>{

        document.getElementById('pedra').addEventListener('click', ()=>{
        let valorAleatorio = Math.random() * 3
        valorAleatorio = Math.floor(valorAleatorio)
        const opcoes = ['pedra', 'papel', 'tesoura']
        document.querySelector('.resultado').style.display = 'none'
        const valorMaquina = opcoes[valorAleatorio]
        if(valorMaquina === 'pedra'){
            document.querySelector('.resultado').innerHTML = `<p>Sua escolha: <b>PEDRA</b></p> </br> Empatamos! Vamos jogar outra vez.`
        }
        else if(valorMaquina ==="papel"){
            document.querySelector('.resultado').innerHTML = `<p>Sua escolha: <b>PEDRA</b></p> </br> haha! Escolhi PAPEL e você perdeu, mais sorte na proxíma.`
        } else {
            document.querySelector('.resultado').innerHTML = `<p>Sua escolha: <b>PEDRA</b></p> </br> Ah não! Eu escolhi TESOURA e você venceu, tenho certeza que foi sorte, vamos jooar de novo.`
        }
        document.querySelector('.resultado').style.display = 'block'
    })

    document.getElementById('papel').addEventListener('click', ()=>{
        let valorAleatorio = Math.random() * 3
        valorAleatorio = Math.floor(valorAleatorio)
        const opcoes = ['pedra', 'papel', 'tesoura']
        document.querySelector('.resultado').style.display = 'none'
        const valorMaquina = opcoes[valorAleatorio]
        if(valorMaquina === 'pedra'){
            document.querySelector('.resultado').innerHTML = `<p>Sua escolha: <b>PAPEL</b></p> </br> Ah não! Escolhi PEDRA e venceu, tenho certeza que foi sorte, vamos jooar de novo.`
      
        }
        else if(valorMaquina ==="papel"){
            document.querySelector('.resultado').innerHTML = `<p>Sua escolha: <b>PAPEL</b></p> </br> Empatamos! Vamos jogar outra vez.`
        } else {
            document.querySelector('.resultado').innerHTML = `<p>Sua escolha: <b>PAPEL</b></p> </br> haha! Escolhi TESOURA e você perdeu, mais sorte na proxíma.`
        }
        document.querySelector('.resultado').style.display = 'block'
    })

    document.getElementById('tesoura').addEventListener('click', ()=>{
        let valorAleatorio = Math.random() * 3
        valorAleatorio = Math.floor(valorAleatorio)
        const opcoes = ['pedra', 'papel', 'tesoura']
        document.querySelector('.resultado').style.display = 'none'
        const valorMaquina = opcoes[valorAleatorio]
        if(valorMaquina === 'pedra'){
            document.querySelector('.resultado').innerHTML = `<p>Sua escolha: <b>TESOURA</b></p> </br> Ah não! Eu escolhi PAPEL e você venceu, tenho certeza que foi sorte, vamos jooar de novo.`
        }
        else if(valorMaquina ==="papel"){
            document.querySelector('.resultado').innerHTML = `<p>Sua escolha: <b>TESOURA</b></p> </br> haha! Escolhi PEDRA e vocÊ perdeu, mais sorte na proxíma.`
        } else {
            document.querySelector('.resultado').innerHTML = `<p>Sua escolha: <b>TESOURA</b></p> </br> Empatamos! Vamos jogar outra vez.`
        }
        document.querySelector('.resultado').style.display = 'block'
    })
})