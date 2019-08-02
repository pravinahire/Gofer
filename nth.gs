nth.[].n=undefined
nth.(x::l).1=x
nth.(x::l).n=nth.l.(n-1)