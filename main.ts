basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # # # # #
    `)
basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 12000)
})
