ctype Exp where
  S  : Int -> Exp
  V  : Var -> Exp
  Mul1,Add1,Div1,Sub1 : Exp -> Exp -> Exp

type Var=String

ctype Stmt where
 Asgn   : Var -> Exp -> Stmt
 Ifelse : Bool -> Stmt -> Stmt -> Stmt
 If     : Bool -> Stmt -> Stmt


type Env = [(String,Int)] 
envl=[("a",3),("b",4),("x",8),("y",9)]

eval : Exp -> Int

lookup.x.((y,z)::envl)


                 | (x==y) = z
                 | otherwise = lookup.x.envl
eval.(V.x) = lookup.x.envl
eval.(S.x) = x
eval.(Mul1.e1.e2)  = eval.e1 * eval.e2
eval.(Add1.e1.e2)  = eval.e1 + eval.e2
eval.(Div1.e1.e2)  = eval.e1 / eval.e2
eval.(Sub1.e1.e2)  = eval.e1 - eval.e2
                   

interp: Stmt -> Env -> Env

interp.(Asgn.x.e).envl = [(a,b) | (a,b) <- envl , (x/=a) ] ++ [(x,(eval.e))]  

interp.(Ifelse.cond.s1.s2).envl
                               | (cond==True) = interp.s1.envl
			       | otherwise    = interp.s2.envl

interp.(If.cond.s ).envl
                   | (cond==True) = interp.s.envl 
		   | otherwise    = env