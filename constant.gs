

constant.x = 3

xs = [1,2,3,4,5,6]


addtupl.[] = []
addtupl.((x,y)::xs) = (x+y)::addtupl.xs