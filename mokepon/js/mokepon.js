let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
}

function seleccionarMascotaJugador() {
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
    ataqueJugador = "Tierra 🧱"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo () {
    let ataqueALeatorio = aleatorio(1,3)

    if (ataqueALeatorio == 1) {
        ataqueEnemigo = "Fuego 🔥"
    } else if (ataqueALeatorio == 2) {
        ataqueEnemigo = "Agua 💧"
    } else {
        ataqueEnemigo = "Tierra 🧱"
    }

}

function combate


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load" , iniciarJuego)













