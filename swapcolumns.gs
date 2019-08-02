



swapcols.[] = []
swapcols.((x::xs)::ys) = ( [last.xs] ++ init.xs ++ [x] )::swapcols.ys


