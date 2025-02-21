basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) / 2000 > 1) {
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Birthday), music.PlaybackMode.InBackground)
        for (let index = 0; index < 12; index++) {
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                . . # . .
                `)
            basic.pause(100)
            basic.showLeds(`
                . # . # .
                # . # . #
                . # . # .
                . . # . .
                . . . . .
                `)
            basic.pause(200)
        }
    } else {
        basic.clearScreen()
        basic.pause(100)
    }
})
