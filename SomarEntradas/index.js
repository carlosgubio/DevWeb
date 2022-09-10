function mais() {
  var form = document.querySelector('#ent');

  var entrada = document.createElement('input');
  entrada.type = 'number';
  entrada.classList.add('entrada');

  var botao = document.createElement('input');
  botao.type = 'button';
  botao.value = '+1';

  botao.onclick = mais;
  form.appendChild(entrada);
  form.appendChild(botao);
  Somar();
    
   
  }
  function Somar(){

    var entradas = document.querySelectorAll('.entrada');
    let somatorio = 0;

    entradas.forEach(function(e){
      if(e.value !== ''){
      somatorio+= parseInt(e.value);
      }
    });
    alert('O resultado da soma dos campos é: '+somatorio);
    let divRes = document.querySelector('#dadosSalvos');
    divRes.innerHTML = '<h1>O resultado da soma dos campos é: '+somatorio+'</h1>'
  }