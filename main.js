$(document).ready(function () {
    $('#form-atividade').submit(function (e) {
        e.preventDefault();
        adicionaLinha();
    });

    function adicionaLinha() {
        const inputNome = $("#nome-tarefa");

        const linha = $(`<tr><td>${inputNome.val()}</td></tr>`)

        $(linha).click(function() {
            $(linha).toggleClass("risco");
        })

        $("tbody").append(linha);

        inputNome.val('');
    }

    function atualizaTabela() {
        const corpoTabela = $('tbody');
        corpoTabela.html(nomes.map(nome => `<tr><td>${nome}</td></tr>`).join(''));
    }

    function marcarConcluida() {
        const marcarConcluida = $('<li text-decoration:line-through"></li>');

        $('tbody').append(marcarConcluida);
    }
});
