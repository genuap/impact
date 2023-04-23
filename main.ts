input.onGesture(Gesture.EightG, function () {
    Hit8G += 1
    while (true) {
        music.playTone(330, music.beat(BeatFraction.Double))
        basic.pause(100)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(200)
    }
})
input.onButtonPressed(Button.A, function () {
    control.reset()
})
input.onGesture(Gesture.ThreeG, function () {
    Hit6G += 1
})
let Hit6G = 0
let Hit8G = 0
basic.forever(function () {
    if (Hit8G > 0) {
        basic.showString("8G!!")
        basic.pause(500)
        basic.clearScreen()
    } else {
        if (Hit6G > 0) {
            basic.showString("Hits:")
            basic.pause(200)
            basic.showNumber(Hit6G)
            basic.pause(500)
            basic.clearScreen()
        } else {
            basic.showString("OK")
            basic.pause(200)
            basic.clearScreen()
        }
    }
})
