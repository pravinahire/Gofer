ctype ExpTree where
  Plus, Minus, Mul : ExpTree-> ExpTree -> ExpTree
  Lf : Int -> ExpTree

eval.(Lf.x)		= x
eval.(Plus.l.r)		= (eval.l) + (eval.r)
eval.(Minus.l.r)	= (eval.l)- (eval.r)
eval.(Mul.l.r)		= (eval.l) * (eval.r)

t = Plus.(Lf.2).(Lf.3)

ctype Instr where
  PlusI, MinusI, MulI : Instr
  Push            : Int -> Instr

mac  : [Instr] -> [Int] -> [Int]
--     instrlist  stack    stack-at-end

mac.[].stk			= stk
mac.(PlusI::is).(r::l::s)	= mac.is.((l+r)::s)
mac.(MinusI::is).(r::l::s)	= mac.is.((l-r)::s)
mac.(MulI::is).(r::l::s)	= mac.is.((l*r)::s)
mac.(Push.i::is).s		= mac.is.(i::s)

-- compiler : ExpTree  -> [Instr]