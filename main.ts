function alarma () {
    music.playMelody("C5 A B G A F G E ", 500)
}
input.onButtonPressed(Button.A, function () {
    tiempoInicial += 1
    tiempoActual = tiempoInicial
})
function decrementarTiempoActual () {
    tiempoActual += -1
    basic.showNumber(tiempoActual)
}
input.onButtonPressed(Button.B, function () {
    tiempoInicial += -1
    tiempoActual = tiempoInicial
})
let tiempoActual = 0
let tiempoInicial = 0
tiempoInicial = 5
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
