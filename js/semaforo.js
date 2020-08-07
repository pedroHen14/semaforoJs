const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");
const automatico = document.getElementById("automatico")
const semaforoAut = document.getElementById("semaforo");
const semaforo = document.getElementById("semaforo");

function semaVerm() {
    semaforo.src = "./imagem/vermelho.png"
}
function semaAmar() {
    semaforo.src = "./imagem/amarelo.png"
}
function semaVerd() {
    semaforo.src = "./imagem/verde.png"
}

function slide1() {
    semaforoAut.src = "./imagem/vermelho.png"
    setTimeout("slide2()", 1000)
}

function slide2() {
    semaforoAut.src = "./imagem/amarelo.png"
    setTimeout("slide3()", 1000)
}

function slide3() {
    semaforoAut.src = "./imagem/verde.png"
    setTimeout("slide1()", 1000)
}

vermelho.addEventListener("click", semaVerm);
amarelo.addEventListener("click", semaAmar);
verde.addEventListener("click", semaVerd);
automatico.addEventListener("click", slide1);

