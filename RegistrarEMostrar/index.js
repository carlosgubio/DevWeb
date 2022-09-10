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

    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    var th3 = document.createElement("th");
    var th4 = document.createElement("th");
    var th5 = document.createElement("th");

    th1.innerHTML = pessoa.nome;
    th2.innerHTML = pessoa.idade;
    th3.innerHTML = pessoa.nacionalidade;
    th4.innerHTML = pessoa.nomePai;
    th5.innerHTML = pessoa.nomeMae;

    var tr = document.createElement("tr");
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    tr.appendChild(th5);
    tabela.appendChild(tr);
}
btn.addEventListener("click",adicionar);
