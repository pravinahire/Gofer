ctype Op where
  Plus , Mul ,Minus , Divide : Op

ctype Exp where
   pe 	   : Int -> Exp
   Var   : String -> Exp
   Br    : Op -> Exp -> Exp -> Exp


type Lt = [(String,Int)] 
lt=[("a",3),("b",4),("x",8),("y",9)]

eval : Exp -> Int

lookup.x.((y,z)::lt) 
                 | (x==y) = z
                 | otherwise = lookup.x.lt
eval.(Var.x) = lookup.x.lt
eval.(Const.x) = x
eval.(Br.op.e1.e2)
                   | (op == Plus) = eval.e1 + eval.e2
                   | otherwise    = eval.e1 * eval.e2 
  
