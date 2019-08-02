

swapalt.[] = []

swapalt.(x::[]) = [x]

swapalt.(x::y::xs) = y::x::swapalt.xs