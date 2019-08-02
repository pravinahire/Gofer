

ctype Exp where
   Lf : Int -> Exp
   Br : Instructs -> Exp -> Exp -> Exp

--ctype Op where
--   Plus, Min, Divide, Mul : Op

--eval.(Br.Plus.e1.e2)	= eval.e1+eval.e2
--eval.(Br.Minus.e1.e2)	= eval.e1+eval.e2
--eval.(Br.Mul.e1.e2)	= eval.e1+eval.e2
--eval.(Br.Divide.e1.e2)  = eval.e1+eval.e2

ctype Instructs where
     Add,Sub,Divd,Mult	: Instructs
     Push		: Int -> Instructs


compile.(Br.ins.(Lf.x).(Lf.y)) = [Push.x , Push.y, ins]
compile.(Br.ins.e1.e2)  = compile.e1 ++ compile.e2 ++ [ins]

mac.[].stk = stk
mac.(Add::is).(r::l::s) = mac.is.((r+l)::s)