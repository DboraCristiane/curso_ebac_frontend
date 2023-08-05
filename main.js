$(document).ready(function () {
    const nomes = [];

    $('#form-atividade').submit(function (e) {
        e.preventDefault();
        adicionaLinha();
        atualizaTabela();
    });

    $('tbody').click(function() {
        marcarConcluida();
    })

    function adicionaLinha() {
        const inputNome = $('#nome-tarefa');

        nomes.push(inputNome.val());

        let linha = '<tr>';
        linha += `<td>${inputNome.val()}</td>`;
        linha += '</tr>';

        $('tbody').append(linha);

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
