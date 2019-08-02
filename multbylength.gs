

multbylength'.[].l = []

multbylength'.(x::xs).l = (l*x)::multbylength'.xs.l

multbylength.xs = multbylength'.xs.(length.xs)