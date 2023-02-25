结果 = 0
跨度 = 3

def on_forever():
    global 结果
    for index in range(5):
        结果 = 0 + 跨度
        if 结果 > 10:
            结果 = 0
        basic.show_number(结果)
basic.forever(on_forever)
