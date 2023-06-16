let score = 0
let Time_Left = ""
if (Time_Left == "yes") {
    basic.showIcon(IconNames.Happy)
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
    basic.pause(1000)
    score += 1
    basic.showNumber(score)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # . #
        . # . . .
        . . # . .
        `)
    basic.pause(1500)
}
basic.forever(function () {
	
})
