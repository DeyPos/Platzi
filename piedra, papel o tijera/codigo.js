function aleatorio(min,max) {return Math.floor(Math.random() * (max-min+1)+min)}
function eleccion(jugada) {
    let resultado = ""
    if(jugada == 1) {
        resultado = "Piedra ✊"
    } else if(jugada == 2) {
        resultado = "Papel ✋"
    } else if(jugada == 3) {
        resultado = "Tijera ✌"
    } else {resultado = "Debes elegir entre 1,2 o 3"
}
    return resultado
}
    
// 1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3) {
    pc = aleatorio(1,3)
    jugador = prompt("Elige: \n1 para piedra \n2 para papel \n3 para tijera")
    //alert("Elegiste " + jugador)
    //Primer bloque desicion jugador
    
    alert("Tu eliges: " + eleccion(jugador))
    alert("El pc elige: " + eleccion(pc))
    
    //COMBATE lo primero que hay que hacer es verificar que no empatamos
    if(pc == jugador) {alert("Empate")} 
    else if((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) ||(jugador == 3 && pc == 2)) {alert("Ganaste") 
    triunfos = triunfos + 1}
    else {alert("Perdiste") 
    perdidas = perdidas + 1}
}
alert("Ganaste " + triunfos + " y perdiste " + perdidas)
    