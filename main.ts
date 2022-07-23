function alarma () {
    music.playMelody("C5 A B G A F G E ", 500)
}
function decrementarTiempoActual () {
    tiempoActual += -1
    basic.showNumber(tiempoActual)
}
let tiempoActual = 0
let tiempoInicial = 5
tiempoActual = tiempoInicial
loops.everyInterval(1000, function () {
    if (tiempoActual > 0) {
        decrementarTiempoActual()
        if (tiempoActual == 0) {
            alarma()
        }
    }
})
basic.forever(function () {
	
})
