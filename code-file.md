# 코드

## 알고리즘 설명

이 프로젝트는 이렇게 작동해요:

1. 계속 반복해서 확인해요 (forever 루프)
2. 자석이 가까이 있는지 확인해요
3. 자석이 가까이 있으면:
   - 생일 축하 노래를 틀어요
   - 케익 모양의 불빛을 반짝반짝 보여줘요
4. 자석이 멀리 있으면:
   - 화면을 꺼요
   - 잠시 기다려요

## 블록코딩

이 그림처럼 블록을 연결하면 돼요:

![code](/img/microbit-birthday.png)

## 텍스트코딩 (Python)

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

## 코드 업로드하는 방법

1. 컴퓨터에서 [MakeCode 편집기](https://makecode.microbit.org/)를 열어요.
2. "새 프로젝트" 버튼을 눌러요.
3. 블록을 그림처럼 연결해요.
4. 프로젝트 이름을 넣고 저장해요.
5. "다운로드" 버튼을 눌러서 파일을 컴퓨터에 저장해요.
6. USB 케이블로 마이크로비트를 컴퓨터에 연결해요.
7. 다운로드한 파일을 마이크로비트 드라이브에 복사해요.
8. 코드가 마이크로비트에 올라가면 자동으로 실행돼요.

## 코드 바꿔보기

1. **다른 노래 틀기**:
   - "생일 축하" 대신 다른 노래를 선택해보세요.
   
2. **다른 불빛 패턴 만들기**:
   - 케익 모양 대신 다른 그림을 만들어보세요.

3. **더 멀리서도 감지하게 만들기**:
   - 자석을 감지하는 값을 조정해보세요.

4. **버튼 기능 추가하기**:
   - A나 B 버튼을 누르면 다른 동작을 하게 만들어보세요.

## 문제 해결하기

- **노래가 안 나와요**: 
  - 마이크로비트 v2인지 확인하세요(v1은 소리가 안 나와요).
  - 건전지가 충분한지 확인하세요.
  
- **자석을 가져가도 반응이 없어요**:
  - 더 강한 자석을 사용해보세요.
  - 마이크로비트에 더 가까이 가져가보세요.
  
- **불빛이 안 보여요**:
  - 코드가 잘 올라갔는지 확인하세요.
  - 건전지가 제대로 연결되었는지 확인하세요.
