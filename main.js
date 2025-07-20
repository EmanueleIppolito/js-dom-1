const lightbulb = document.getElementById('lightbulb');
const stateButton = document.getElementById('interruttore');

let isOn = false;

stateButton.addEventListener('click', function () {
    if (isOn) {
        lightbulb.src = './lamp_img/img/white_lamp.png';
        stateButton.innerText = 'Cliccami per accendere la lampadina!'
    } else {
        lightbulb.src = './lamp_img/img/yellow_lamp.png';
        stateButton.innerText = 'Cliccami per spegnere la lampadina!'
    }
    isOn = !isOn;
});