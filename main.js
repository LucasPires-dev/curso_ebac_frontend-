$('form').submit(function (e) {
    const novaTarefa = $('#nova-tarefa').val()
    const novoItem = $(`<li>${novaTarefa}</li>`)
    novoItem.appendTo('ul')
    $('div > button').css('display', 'block')
    $('#nova-tarefa').val('')
    e.preventDefault()
})

$('#lista-tarefas').on('click', 'li',function(e){
    $(e.target).toggleClass('completo');
})

$('div > button').click(function (e){
    $('#lista-tarefas').empty()
})