
const hora = document.querySelector("#horas");
const minuto = document.querySelector("#minutos");
const segundo = document.querySelector("#segundos");

// Função Tempo que vai pegar as horas os minutos e os segundos.

const relogio = setInterval(function time() {
    
    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    // Verifica se o número é menor que 10, se for adiciona o zero a esquerda.
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }

    hora.textContent = h;
    minuto.textContent = m;
    segundo.textContent = s;

}, 1000);