
check.False.[] = False

check.False.xs = or1.xs

check.True.xs = True

or1.(x::xs) = check.x.xs 
