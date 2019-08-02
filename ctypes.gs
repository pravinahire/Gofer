


ctype LstInt where
  Empty : LstInt
  Lst   : Int -> LstInt -> LstInt


-- To construct a list from gofer representation of a list using foldr
lstmap.[] = Empty
lstmap.(x::xs) = Lst.x.(lstmap.xs)

-- To construct a list from gofer representation of a list using foldr
lstmap1.l = foldr.Lst.Empty.l

-- Call it as lstmap1.list as f.x=g.x => f=g
lstmap2 = foldr.Lst.Empty


-- Gofer list from LstInt list
goflist.Empty = []
goflist.(Lst.x.xs) = x::goflist.xs

