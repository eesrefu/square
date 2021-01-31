input.onButtonPressed(Button.A, function () {
    turtle.pen(TurtlePenMode.Down)
    for (let indeks = 0; indeks <= 4; indeks++) {
        turtle.forward(1)
        turtle.turnRight()
        turtle.forward(1)
        turtle.turnRight()
        turtle.forward(1)
        turtle.turnRight()
        turtle.forward(1)
        turtle.turnRight()
    }
})
turtle.forward(1)
basic.forever(function () {
    turtle.forward(1)
    turtle.turnRight()
    turtle.forward(1)
})
