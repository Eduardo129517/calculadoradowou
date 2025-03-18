const resultado = document.querySelector('.result');
const audioConfirmar = new Audio('wonder-of-u.mp3'); // Som ao confirmar
const audioLimpar = new Audio('Josuke8Ora.wav'); // Som ao limpar

function inserir(valor) {
    resultado.innerHTML += valor;
}

function limpar() {
    resultado.innerHTML = '';
    audioLimpar.play(); // Toca o som ao limpar
}

function apagar() {
    if (resultado.textContent) {
        resultado.textContent = resultado.textContent.substring(0, resultado.textContent.length - 1);
    }
}

function confirmar() {
    if (resultado.textContent != 'erro') {
        resultado.innerHTML = eval(resultado.innerHTML);
        audioConfirmar.play(); // Toca o som ao confirmar
    }
}
