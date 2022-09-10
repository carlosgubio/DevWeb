var btn = document.querySelector('#salvar');

    var campoNome = document.querySelector('#nome');
    var campoIdade = document.querySelector('#idade');
    var campoNacionalidade = document.querySelector('#nacionalidade');
    var campoNomePai = document.querySelector('#nomePai');
    var campoNomeMae = document.querySelector('#nomeMae');

function adicionar() {

    if (!campoNome.value) {
        alert('Nome não preenchido;');
        return;
    }
    if (!campoIdade.value) {
        alert('Idade não preeenchida.');
        return;
    }
    if (!campoNacionalidade.value) {
        alert('Nacionalidade não preeenchida.');
        return;
    }
    if (!campoNomePai.value) {
        alert('Nome do Pai não preeenchida.');
        return;
    }
    if (!campoNomeMae.value) {
        alert('Nome da Mãe não preeenchida.');
        return;
    }

    var pessoa = {
        nome: campoNome.value,
        idade: campoIdade.value,
        nacionalidade: campoNacionalidade.value,
        nomePai: campoNomePai.value,
        nomeMae: campoNomeMae.value
    };

    var tabela = document.querySelector('#tabelaBody');

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    td1.innerHTML = pessoa.nome;
    td2.innerHTML = pessoa.idade;
    td3.innerHTML = pessoa.nacionalidade;
    td4.innerHTML = pessoa.nomePai;
    td5.innerHTML = pessoa.nomeMae;

    var tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tabela.appendChild(tr);
}
btn.addEventListener("click",adicionar);
