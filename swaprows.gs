





swaprows.[] = []
swaprows.(x::xs) = [last.xs] ++ reverse.(tail.(reverse.xs)) ++ [x]