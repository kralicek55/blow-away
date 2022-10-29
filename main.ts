let Sloupec = 0
let Radek = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (input.soundLevel() > 128) {
            Radek = randint(0, 4)
            Sloupec = randint(0, 4)
        }
        if (led.point(Sloupec, Radek)) {
            led.unplot(Sloupec, Radek)
            led.plot(Sloupec + 1, Radek)
        }
    }
})
