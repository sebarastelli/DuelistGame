let ataqueJugador
let ataqueEnemigo
let resultado
let vidasEnemigo = 3
let vidasJugador = 3

function iniciarJuego() {
    let sectionAtaque = document.getElementById("atack-el")
    sectionAtaque.style.display = "none";
    
    
    let botonMascotaJugador = document.getElementById("boton-seleccionar")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fire")
    let botonAgua = document.getElementById("boton-water")
    let botonTierra = document.getElementById("boton-dirt")
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    let botonReiniciar = document.getElementById("reiniciar")
    botonReiniciar.style.display = "none"
    botonReiniciar.addEventListener("click", reiniciarJuego)

}

function aleatorio(min,max){
    return Math.floor(Math.random()* (max - min + 1) + min)
}

function seleccionarMascotaJugador() {
    let sectionAtaque = document.getElementById("atack-el")
    sectionAtaque.style.display = "block";
    let sectionSelect = document.getElementById("select-el")
    sectionSelect.style.display = "none";
    let botonReiniciar = document.getElementById("reiniciar")
    botonReiniciar.style.display = "block"
    let juampi = document.getElementById("juampi")
    let negro = document.getElementById("negro")
    let chulin = document.getElementById("chulin")
    let taz = document.getElementById("taz")
    let messi = document.getElementById("messi")
    let balu = document.getElementById("balu")
    let mascotaJugador = document.getElementById("mascota-jugador")
    
    if (juampi.checked){
            mascotaJugador.innerHTML = "JUAMPI"
    }
    else if(negro.checked){
            mascotaJugador.innerHTML = "NEGRO"
    }
    else if(chulin.checked){
            mascotaJugador.innerHTML = "CHULIN"
    }
    else if(taz.checked){
        mascotaJugador.innerHTML = "TAZ"
    }
    else if(messi.checked){
            mascotaJugador.innerHTML = "MESSI"
    }
    else if(balu.checked){
            mascotaJugador.innerHTML = "BALU"
    }
    else{
        alert("selecciona una mascota")
        reiniciarJuego()
    }
    seleccionarMascotaEnemiga()
}
function seleccionarMascotaEnemiga(){
    let mascotaEnemiga = document.getElementById("mascota-enemigo")
    juampi = 1
    negro = 2
    chulin = 3
    taz = 4
    messi = 5
    balu = 6
    let enemigo = aleatorio(1,6)
    if (enemigo == 1){
        mascotaEnemiga.innerHTML = "JUAMPI"
}
else if(enemigo == 2){
         mascotaEnemiga.innerHTML = "NEGRO"
}
else if(enemigo == 3){
       mascotaEnemiga.innerHTML = "CHULIN"
}
else if(enemigo == 4){
 mascotaEnemiga.innerHTML = "TAZ"
}
else if(enemigo == 5){
       mascotaEnemiga.innerHTML = "MESSI"
}
else{
     mascotaEnemiga.innerHTML = "BALU"
}

}

function ataqueFuego() {
    ataqueJugador = "Fuego🔥"
    ataqueAzarEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "Agua💧"
    ataqueAzarEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "Tierra🌱"
    ataqueAzarEnemigo()
}

function ataqueAzarEnemigo(){

    let ataqueEnemigoAzar = aleatorio(1,3)
    if (ataqueEnemigoAzar == 1){
        ataqueEnemigo = "Fuego🔥"
    }
    else if (ataqueEnemigoAzar == 2) {
        ataqueEnemigo = "Agua💧"
    }
    else{
        ataqueEnemigo = "Tierra🌱"
    }
    combate()
   
}

function combate(){
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
    let spanVidasJugador = document.getElementById("vidas-jugador")
  
    if ((ataqueJugador == "Fuego🔥" && ataqueEnemigo == "Tierra🌱") || (ataqueJugador == "Agua💧" && ataqueEnemigo == "Fuego🔥") || (ataqueJugador == "Tierra🌱" && ataqueEnemigo == "Agua💧")){
        crearMensaje(" GANASTE ")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if (ataqueJugador == ataqueEnemigo){
       crearMensaje(" EMPATASTE")
    }else {
        crearMensaje(" PERDISTE ")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0){
        crearMensajeFinal("Felicitaciones tu duelista ASESINÓ al duelista rival😎")
    }
    else if (vidasJugador == 0) {
        crearMensajeFinal("Desgraciadamente tu duelista fue ASESINADO por el enemigo💀")
    }
}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes-el")
    let parrafo=document.createElement('p')
    parrafo.innerHTML='Tu duelista atacó con '+ataqueJugador+' y el enemigo atacó con '+ataqueEnemigo+ resultado;
    sectionMensajes.appendChild(parrafo)
}

function  crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes-el")
    let parrafo=document.createElement('p')
    parrafo.innerHTML= resultadoFinal
    sectionMensajes.appendChild(parrafo) 
    let botonFuego = document.getElementById("boton-fire")
    let botonAgua = document.getElementById("boton-water")
    let botonTierra = document.getElementById("boton-dirt")
    botonFuego.disabled = true;
    botonAgua.disabled = true;
    botonTierra.disabled = true;
}

function reiniciarJuego(){
    location.reload()
}

window.addEventListener('load', iniciarJuego)

