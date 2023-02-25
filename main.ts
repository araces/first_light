input.onButtonPressed(Button.A, function () {
    A = A + 1
    basic.showNumber(A)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(A + B)
    A = 0
    B = 0
})
input.onButtonPressed(Button.B, function () {
    B = B + 1
    basic.showNumber(B)
})
let B = 0
let A = 0
A = 0
B = 0
