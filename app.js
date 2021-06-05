const celciusInput = document.querySelector('#celcius > input');
const farhenheitInput = document.querySelector('#farhenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNum(num) {
    return Math.round(num*100)/100;
}

function celciusConvert() {
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp*(9/5)+32);
    const kTemp = cTemp + 273.15;
    farhenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function farhenheitConvert() {
    const fTemp = parseFloat(farhenheitInput.value);
    const cTemp = (fTemp-32)*(5/9);
    const kTemp = cTemp + 273.15;
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

function kelvinConvert() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (cTemp*(9/5)+32);
    celciusInput.value = roundNum(cTemp);
    farhenheitInput.value = roundNum(fTemp);
}

function main() {
    celciusInput.addEventListener('input', celciusConvert);
    farhenheitInput.addEventListener('input', farhenheitConvert);
    kelvinInput.addEventListener('input', kelvinConvert);
}

main();