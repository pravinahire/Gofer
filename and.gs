
check.True.[] = True

check.True.xs = and1.xs

check.False.xs = False

and1.(x::xs) = check.x.xs 
