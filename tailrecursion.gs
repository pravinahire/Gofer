




-- Product using Tail Recursion
prod1.[].a = a
prod1.(x::xs).a = prod1.xs.(x*a)
prod.xs = prod1.xs.1




-- Function to convert string to integer using Tail Recursion

atoi1.[].s = s
atoi1.(x::xs).s = atoi1.xs.(s*10 +(ord.x - 48))  
atoi.xs = atoi1.xs.0


-- Sum using recursion

sum1.[] = 0  
sum1.(x::xs) = x + sum1.xs


-- Sum using Tail Recursion

sum2.[].a = a
sum2.(x::xs).a = sum2.xs.(x+a)
sumtr.xs = sum2.xs.0



-- Finding maximum element from list using Tail Recursion

max1.[].max = max
max1.(x::xs).max | (x>max)   = max1.xs.x
                 | otherwise = max1.xs.max
maxnum.xs = max1.xs.0