basic.forever(function () {
    pins.servoWritePin(AnalogPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    if (input.buttonIsPressed(Button.A)) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
        basic.showString("Welcome")
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.servoWritePin(AnalogPin.P2, 90)
        basic.pause(5000)
    }
})
