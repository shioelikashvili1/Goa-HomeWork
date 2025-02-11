from turtle import *


#we want to paint a house


#step 1: draw a square

width(7)
color("silver")
forward(200)
left(90)
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
#end of square

#drawing a door

forward(70)
color("brown")
begin_fill()
left(90)
forward(100)
right(90)
forward(60)
right(90)
forward(100)
end_fill()

#paint a roof

penup()
goto(200, 200)
pendown()

color("green")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

#end of roof

penup()
goto(60, 100)
pendown()

#paint a windows

color("light blue")
begin_fill()
left(30)
forward(60)

right(90)
forward(50)

right(90)
forward(60)

right(90)
forward(50)
end_fill()

color("black")

penup()
goto(35, 100)
pendown()

right(90)
forward(60)

penup()
goto(60,70)
pendown()

right(90)
forward(50)

color("light blue")
begin_fill()

penup()
goto(140, 100)
pendown()

right(180)
forward(50)

right(90)
forward(60)

right(90)
forward(50)

right(90)
forward(60)
end_fill()

color("black")

penup()
goto(165, 100)
pendown()

right(180)
forward(60)

penup()
goto(190, 70)
pendown()
right(90)
forward(50)

#end of windows

#end of house



exitonclick()