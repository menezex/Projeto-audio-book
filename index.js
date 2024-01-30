const buttonPlayPause = document.getElementById("play-pause");
const audioCapitulo = document.getElementById("audio-capitulo");
const nomeCapitulo = document.getElementById("capitulo");
const buttonProximo = document.getElementById("proximo");
const buttonAnterior = document.getElementById("anterior");

const numeroCapitulos = 10;
let taTocando = 0; //0 = não | 1 = sim
let capituloAtual = 1;

function tocarFaixa() {
  audioCapitulo.play();
  taTocando = 1;
  buttonPlayPause.classList.remove("bi-play-circle-fill");
  buttonPlayPause.classList.add("bi-pause-circle-fill");
}

function pausarFaixa() {
  audioCapitulo.pause();
  taTocando = 0;
  buttonPlayPause.classList.remove("bi-pause-circle-fill");
  buttonPlayPause.classList.add("bi-play-circle-fill");
}

function tocarOuPausar() {
  if (taTocando === 0) {
    tocarFaixa();
  } else {
    pausarFaixa();
  }
}

function trocarNomeFaixa() {
  nomeCapitulo.innerText = `Capítulo ${capituloAtual}`;
}

function proximaFaixa() {
  if (capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual += 1;
  }
  audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
  tocarFaixa();
  trocarNomeFaixa();
}

function voltarFaixa() {
  if (capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual -= 1;
  }
  audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
  tocarFaixa();
  trocarNomeFaixa();
}

buttonPlayPause.addEventListener("click", tocarOuPausar);
buttonProximo.addEventListener("click", proximaFaixa);
buttonAnterior.addEventListener("click", voltarFaixa);
