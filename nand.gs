nand: [Bool] -> Bool



check.True.True.[] = False
check.False.False.[] = True
check.True.False.[] = True
check.False.True.[] = True

check.True.True.xs = nand.(False::xs)
check.False.False.xs = nand.(True::xs)
check.True.False.xs = nand.(True::xs)
check.False.True.xs = nand.(True::xs)


nand.(x::y::xs) = check.x.y.xs


