

ispresent.e.[] = False

ispresent.e.(x::xs) | (e==x) = True
                    | otherwise = ispresent.e.xs

remdupli.[] = []

remdupli.(x::xs) | ispresent.x.xs = remdupli.xs
                 | otherwise = x::remdupli.xs

rmdupli.xs = reverse.(remdupli.(reverse.xs))