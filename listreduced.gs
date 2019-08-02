

lreduced.op.id = each
                 where
		   each.[] = id
		   each.(x::xs) = op.x.(each.xs)