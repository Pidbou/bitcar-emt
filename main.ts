input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(0)
})
radio.setGroup(1)
let Move = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        Move = 0
    }
    if (input.buttonIsPressed(Button.A)) {
        Move = 1
    }
    radio.sendValue("Pitch", Move * input.rotation(Rotation.Pitch))
    radio.sendValue("Roll", Move * input.rotation(Rotation.Roll))
})
