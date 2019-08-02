

not1.[] = []

not1.(x::xs) | (x==True) = False::not1.xs 
             | otherwise = True::not1.xs



