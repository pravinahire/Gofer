and1: [Bool] -> Bool

check1.True.[] = True

check1.True.xs = and1.xs

check1.False.xs = False

and1.(x::xs) = check1.x.xs 



or1: [Bool] -> Bool

check2.False.[] = False

check2.False.xs = or1.xs

check2.True.xs = True

or1.(x::xs) = check2.x.xs 



exor1: [Bool] -> Bool

--check3.x.y.[] | (x==y) = False
--              | otherwise = True

check3.True.True.[] = False
check3.False.False.[] = False
check3.True.False.[] = True
check3.False.True.[] = True

--check3.x.y.xs | (x==y) = exor1.(False::xs)
--              | otherwise = exor1.(True::xs)

check3.True.True.xs = exor1.(False::xs)
check3.False.False.xs = exor1.(False::xs)
check3.True.False.xs = exor1.(True::xs)
check3.False.True.xs = exor1.(True::xs)


exor1.(x::y::xs) = check3.x.y.xs 




exnor1: [Bool] -> Bool

--check4.x.y.[] | (x==y) = True
--              | otherwise = False

check4.True.True.[] = True
check4.False.False.[] = True
check4.True.False.[] = False
check4.False.True.[] = False

--check4.x.y.xs | (x==y) = exnor1.(True::xs)
--              | otherwise = exnor1.(False::xs)

check4.True.True.xs = exnor1.(True::xs)
check4.False.False.xs = exnor1.(True::xs)
check4.True.False.xs = exnor1.(False::xs)
check4.False.True.xs = exnor1.(False::xs)


exnor1.(x::y::xs) = check4.x.y.xs 



nand: [Bool] -> Bool

check5.True.True.[] = False
check5.False.False.[] = True
check5.True.False.[] = True
check5.False.True.[] = True

check5.True.True.xs = nand.(False::xs)
check5.False.False.xs = nand.(True::xs)
check5.True.False.xs = nand.(True::xs)
check5.False.True.xs = nand.(True::xs)


nand.(x::y::xs) = check5.x.y.xs




nor: [Bool] -> Bool

check6.True.True.[] = False
check6.False.False.[] = True
check6.True.False.[] = False
check6.False.True.[] = False

check6.True.True.xs = nor.(False::xs)
check6.False.False.xs = nor.(True::xs)
check6.True.False.xs = nor.(False::xs)
check6.False.True.xs = nor.(False::xs)

nor.(x::y::xs) = check6.x.y.xs


not1: [Bool] -> [Bool]

not1.[] = []

not1.(x::xs) | (x==True) = [False] ++ not1.xs 
             | otherwise = [True] ++ not1.xs



