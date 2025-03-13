# 코드

## 알고리즘 

## 블록코딩 
![code](/img/microbit-screenshot.png)

## 텍스트코딩 
```python
def on_forever():
    if input.magnetic_force(Dimension.STRENGTH) / 2000 > 1:
        music._play_default_background(music.built_in_playable_melody(Melodies.BIRTHDAY),
            music.PlaybackMode.IN_BACKGROUND)
        for index in range(12):
            basic.show_leds("""
                . . # . .
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                """)
            basic.pause(100)
            basic.show_leds("""
                . . . . .
                . . # . .
                . # . # .
                # . # . #
                . # . # .
                """)
            basic.pause(200)
    else:
        basic.clear_screen()
        basic.pause(100)
basic.forever(on_forever)
```

