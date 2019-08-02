
remove.x.[] = []
remove.x.(e::poslst)
                                   | (e==x) = remove.x.poslst
				   | otherwise = e::remove.x.poslst

findpos'.[].p = []
findpos'.(x::vert).p
                                 | (x==1) = p::findpos'.vert.(p+1)
				 | otherwise = findpos'.vert.(p+1)

findpos.vert = findpos'.vert.0



findpath'.g.(x::pos).s.e
                                       | (s==e) = s::e::[]
		         	       | (x==e) = e::[]
				       | (elem.e.(x::pos)) = x::e::[]
				       | otherwise = s::x::findpath'.g.(remove.x.(findpos.(g!!x))).s.e

findpath.grf.sv.ev = findpath'.grf.(findpos.(grf!!sv)).sv.ev