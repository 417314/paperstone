input.onButtonPressed(Button.A, function () {
    radio.sendString("a")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("b")
})
radio.setGroup(209)
basic.forever(function () {
	
})
