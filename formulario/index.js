var btn = document.querySelector('#salvar');
function onClickSalvar() {

    let campoNome = document.querySelector('#nome');
    let campoIdade = document.querySelector('#dataNascimento');
    let campoNaturalidade = document.querySelector('#naturalidade');
    let campoNomePai = document.querySelector('#nomePai');
    let campoNomeMae = document.querySelector('#nomeMae');

    if (!campoNome.value) {
        alert('Nome não preenchido;');
        return;
    }
    if (!campoIdade.value) {
        alert('Data de Nascimento não preeenchida.');
        return;
    }
    else {
        // var anoAtual = new Date().getFullYear(); 
        // var anoInformado = campoIdade;
        // console.log(anoAtual - anoInformado);

        var anoAtual = new Date().getFullYear();
        var dataNascimento = campoIdade.value;
        var anoInformado = dataNascimento.split('/')[2];
        var idade = (anoAtual - anoInformado);
    }
    if (!campoNaturalidade.value) {
        alert('Naturalidade não preeenchida.');
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
        idade: idade,
        naturalidade: campoNaturalidade.value,
        nomePai: campoNomePai.value,
        nomeMae: campoNomeMae.value
    };

    let div = document.querySelector('#dadosSalvos');

    div.innerHTML = ' <Label>Dados Pessoais</Label><br>' + 
                    '<Label>Nome:</Label>' + ' <input disabled value = "' + pessoa.nome + '" /><br>' + 
                    '<Label>Idade:</Label>' + ' <input disabled value = "' + pessoa.idade + '" /><br>' +
                    '<Label>Naturalidade:</Label>' + ' <input disabled value = "' + pessoa.naturalidade + '" /><br>' +
                    '<Label>Nome do Pai:</Label>' + ' <input disabled value = "' + pessoa.nomePai + '" /><br>' +
                    '<Label>Nome da Mãe:</Label>' + ' <input disabled value = "' + pessoa.nomeMae + '" /><br>'
}
btn.addEventListener("click",onClickSalvar);
