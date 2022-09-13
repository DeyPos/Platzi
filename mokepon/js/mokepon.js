let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("boton-reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display = "none"

    let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display = "block"

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge 🐍"
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo 🐷"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya 🐻"
    } else {
        alert("Debes elegir una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    // sirve para seleccionar al elemento en html que tenga el id mascota-enemigo
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodoge 🐍"
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo 🐷"
    } else {
        spanMascotaEnemigo.innerHTML = "Ratigueya 🐻"
    }
}

function ataqueFuego() {
    ataqueJugador = "Fuego 🔥"
    ataqueAleatorioEnemigo()
}
function ataqueAgua () {
    ataqueJugador = "Agua 💧"
    ataqueAleatorioEnemigo()
}
function ataqueTierra () {
    ataqueJugador = "Tierra🌱"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo () {
    let ataqueALeatorio = aleatorio(1,3)

    if (ataqueALeatorio == 1) {
        ataqueEnemigo = "Fuego 🔥"
    } else if (ataqueALeatorio == 2) {
        ataqueEnemigo = "Agua 💧"
    } else {
        ataqueEnemigo = "Tierra🌱"
    }
    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == "Fuego 🔥" && ataqueEnemigo == "Tierra🌱") {
        crearMensaje("GANASTE🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Agua 💧" && ataqueEnemigo == "Fuego 🔥") {
        crearMensaje("GANASTE🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == "Tierra🌱" && ataqueEnemigo == "Agua 💧") {
        crearMensaje("GANASTE🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
        
    revisarVidas()
}

function revisarVidas() {
    if(vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES, Tu mascota gano la batalla 🏆")
    } else if(vidasJugador == 0) {
        crearMensajeFinal("PERDISTE, La mascota del enemigo gano la batalla 😪")
    } 
}


function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("Mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + "- " + resultado


    sectionMensajes.appendChild(parrafo)

}

function crearMensajeFinal(resultadoFinal) {

    let sectionReiniciar = document.getElementById("boton-reiniciar")
    sectionReiniciar.style.display = "block"

    let sectionMensajes = document.getElementById("Mensajes")
    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal


    sectionMensajes.appendChild(parrafo)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true
}

function reiniciarJuego() {
    location.reload()
    
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load" , iniciarJuego)













