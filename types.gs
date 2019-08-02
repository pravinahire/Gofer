


g.x = x + 2

f.g.x = g.x + 1

-- For Example - We can call it as  f.length.[1,2,3,4] , f.ord.'A'
---------------------------

g1 = \x -> x +1

f1 =  \g1 -> (\x -> g1.x + 1)