

lessthan.e.[] = []

lessthan.e.(x::xs) | (e>x) = x::lessthan.e.xs
                   | otherwise = lessthan.e.xs
---------------------------------------------------------------------------------------------------------------------------
greateql.e.[] = []

greateql.e.(x::xs) | (e<=x) = x::greateql.e.xs
                   | otherwise = greateql.e.xs

----------------------------------------------------------------------------------------------------------------------------
sort1.[] = []
sort1.(x::xs) = (sort1.(lessthan.x.xs)) ++ [x] ++ (sort1.(greateql.x.xs))