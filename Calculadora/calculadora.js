function calcular(element) {
   
        var num1 = document.querySelector('#num1');
        var num2 = document.querySelector('#num2');
        var oper = element.value;

        if (oper == "+") {
            var res = parseInt(num1.value) + parseInt(num2.value);
        } else {
            if (oper == "-") {
            var res = parseInt(num1.value) - parseInt(num2.value);
            } else {
                if (oper == "/") {
                    var res = parseInt(num1.value) / parseInt(num2.value);
                } else {
                    var res = parseInt(num1.value) * parseInt(num2.value);
                }
            }
        }
        let div = document.querySelector('#dadosSalvos');

    div.innerHTML = ' <input disabled value = "O valor é: ' + res + '" />'
    }