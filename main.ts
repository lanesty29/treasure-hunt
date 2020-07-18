radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
    basic.pause(200)
    basic.clearScreen()
})
radio.setGroup(1)
radio.setTransmitPower(6)
basic.forever(function () {
    let ID = 0
    radio.sendNumber(ID)
    basic.pause(200)
})
