while True:
    music.set_volume(60)
    if input.light_level() > 4 and input.sound_level() > 1:
        light.set_all(light.rgb(255, 0, 0))
        pause(1000)
        light.clear()
        pause(10000)
        for i in range(5):
            music.ba_ding.play_until_done()
        music.stop_all_sounds()
        pause(300000)
    else: 
        music.stop_all_sounds() and light.clear()