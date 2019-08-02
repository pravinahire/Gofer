exnor1: [Bool] -> Bool

--check.x.y.[] | (x==y) = True
--             | otherwise = False

check.True.True.[] = True
check.False.False.[] = True
check.True.False.[] = False
check.False.True.[] = False

--check.x.y.xs | (x==y) = exnor1.(True::xs)
--             | otherwise = exnor1.(False::xs)

check.True.True.xs = exnor1.(True::xs)
check.False.False.xs = exnor1.(True::xs)
check.True.False.xs = exnor1.(False::xs)
check.False.True.xs = exnor1.(False::xs)


exnor1.(x::y::xs) = check.x.y.xs 
