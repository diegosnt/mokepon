let ataqueJugador;
let ataqueEnemigo;
let resultadoCombate;
let vidasJugador;
let vidasEnemigo;

function iniciarJuego() {
  //seleccionar-ataque

  let seleccionarAtaque = document.getElementById("seleccionar-ataque");
  seleccionarAtaque.style.display = "none";

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "none";

  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", selecionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);

  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);

  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  vidasJugador = 3;
  vidasEnemigo = 3;

  let botonRiniciar = document.getElementById("boton-reiniciar");
  botonRiniciar.addEventListener("click", reiniciarJuego);
}

function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}

function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }

  combate();
}

function crearMensaje() {
  let sectionMensajes = document.getElementById("resultado");
  let ataqueDelJugador = document.getElementById("ataque-del-jugador");
  let ataqueDelEnemigo = document.getElementById("ataque-del-enemigo");

  let notificacion = document.createElement("p");
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  notificacion.innerHTML = resultadoCombate;
  nuevoAtaqueDelJugador.innerHTML = ataqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo;

 // let parrafo = document.createElement("p");
 // parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + " - " + resultadoCombate + " 🎉";

  sectionMensajes.appendChild(notificacion);
  ataqueDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataqueDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");

  parrafo.innerHTML = resultadoFinal;

  sectionMensajes.appendChild(parrafo);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById("reiniciar");
  sectionReiniciar.style.display = "block";
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (ataqueEnemigo == ataqueJugador) {
    resultadoCombate = "EMPATE";
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    resultadoCombate = "GANASTE";
    vidasEnemigo--;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    resultadoCombate = "GANASTE";
    vidasEnemigo--;
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    resultadoCombate = "GANASTE";
    vidasEnemigo--;
  } else {
    resultadoCombate = "PERDISTE";
    vidasJugador--;
  }

  spanVidasJugador.innerHTML = vidasJugador;
  spanVidasEnemigo.innerHTML = vidasEnemigo;

  crearMensaje();

  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    // GANASTE

    crearMensajeFinal("GANASTE 😁");
  } else if (vidasJugador == 0) {
    // PERDISTE
    crearMensajeFinal("PERDISTE 😢");
  }
}

function selecionarMascotaJugador() {
  let seleccionarAtaque = document.getElementById("seleccionar-ataque");
  seleccionarAtaque.style.display = "flex";

  let seleccionarMascota = document.getElementById("seleccionar-mascota");
  seleccionarMascota.style.display = "none";

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Debes seleccionar una mascota!!!");
  }

  selecionarMascotaEnemigo();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function selecionarMascotaEnemigo() {
  mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}

window.addEventListener("load", iniciarJuego);

function reiniciarJuego() {
  location.reload();
}
