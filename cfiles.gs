


q2.[] = True
q2.(x::xs) | (x=='.')  = q1.xs
           | (x/='.')  = q0.xs

q1.[] = False
q1.(x::xs) | (x=='.')  = q1.xs
           | (x=='c')&&(xs==[])  = True
	   | (x=='c')&&(xs/=[])  = q2.xs
	   | otherwise = q0.xs


q0.[] = False
q0.(x::xs) | (x=='.')  = q1.xs
           | otherwise = q0.xs


--q0.('.'::xs) = q1.xs
--q0.(_::xs)   = q0.xs


doaccept.fname = q0.fname

