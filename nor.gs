

nor: [Bool] -> Bool

check.True.True.[] = False
check.False.False.[] = True
check.True.False.[] = False
check.False.True.[] = False

check.True.True.xs = nor.(False::xs)
check.False.False.xs = nor.(True::xs)
check.True.False.xs = nor.(False::xs)
check.False.True.xs = nor.(False::xs)

nor.(x::y::xs) = check.x.y.xs