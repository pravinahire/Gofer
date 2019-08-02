revs'.[].l2=l2
revs'.(x::l1).l2=revs'.l1.(x::l2)
revs.l1=revs'.l1.[]
