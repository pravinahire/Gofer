

-- Map Function

mapper.f.[] = []
mapper.f.(x::xs) = (f.x)::mapper.f.xs




-- Foldl Function using tail recursion (Wrong...!!)

reducel.f.a.[] = a
reducel.f.a.(x::xs) = reducel.f.(f.a.x).xs




-- Foldr Function using tail recursion (Wrong..!!)

reducer.f.a.[] = a
reducer.f.a.(x::xs) = reducer.f.(f.x.a).xs



--Foldr Function (Correct...!!)

reducer1.f.id.[] = id
reducer1.f.id.(x::xs) = f.x.(reducer1.f.id.xs)
