let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let sv = '';
for (i of buttons) {
    i.addEventListener('click', (e) => {
        buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            sv += buttonText;
            screen.value = sv;
        }
        else if (buttonText == 'C') {
            sv = "";
            screen.value = sv;
        }
        else if (buttonText == '=') {
            screen.value = eval(sv);
        }
        else {
            sv += buttonText;
            screen.value = sv;
        }

    })
}

