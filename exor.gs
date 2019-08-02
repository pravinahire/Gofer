

exor1: [Bool] -> Bool

--check.x.y.[] | (x==y) = False
--             | otherwise = True

check.True.True.[] = False
check.False.False.[] = False
check.True.False.[] = True
check.False.True.[] = True

--check.x.y.xs | (x==y) = exor1.(False::xs)
--             | otherwise = exor1.(True::xs)

check.True.True.xs = exor1.(False::xs)
check.False.False.xs = exor1.(False::xs)
check.True.False.xs = exor1.(True::xs)
check.False.True.xs = exor1.(True::xs)


exor1.(x::y::xs) = check.x.y.xs 
