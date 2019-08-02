

deletealt.[] = []
deletealt.(x::[]) = []
deletealt.(x::y::xs) = y::deletealt.xs