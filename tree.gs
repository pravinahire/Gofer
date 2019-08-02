
ctype Btree.a where
  Lf : a -> Btree.a
  Br : a -> Btree.a -> Btree.a -> Btree.a


inorder.(Lf.x) = [x]
inorder.(Br.x.lt.rt) = inorder.lt ++ [x] ++ inorder.rt

preorder.(Lf.x) = [x]
preorder.(Br.x.lt.rt) = [x] ++ preorder.lt ++  preorder.rt

postorder.(Lf.x) = [x]
postorder.(Br.x.lt.rt) = postorder.lt ++ postorder.rt ++ [x]

mirror.(Lf.x) = Lf.x
mirror.(Br.x.lt.rt) = Br.x.(mirror.rt).(mirror.lt)


