while (true) {
    music.setVolume(60)
    if (input.lightLevel() > 4 && input.soundLevel() > 1) {
        light.setAll(light.rgb(255, 0, 0))
        pause(1000)
        light.clear()
        pause(10000)
        for (let i = 0; i < 5; i++) {
            music.baDing.playUntilDone()
        }
        music.stopAllSounds()
        pause(300000)
    } else {
        music.stopAllSounds() && light.clear()
    }
    
}
