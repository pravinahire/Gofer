




check.(x::xs).(p::pat) |(x==p)&&(pat==[]) = True
                       | x==p = check.xs.pat
		       | otherwise = False

lsfiles.[].pat = [] 

lsfiles.(f::fs).pat | (check.(reverse.f).(reverse.pat))==True = f::lsfiles.fs.pat
                    | otherwise = lsfiles.fs.pat