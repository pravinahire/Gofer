

reduced.f = each
             where 
              each.(x::[])= x
              each.(x::xs)=f.x.(each.xs)


