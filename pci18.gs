
-----check whether file name ends with '.c' ----

trans.'.'.1=2
trans.'c'.2=3
trans.a.1=1
trans.'.'.2=1
trans.a.2=1
trans.'.'.3=1
trans.a.3=1

fs=[3,5]
is = 1

type Fsm.q.sig = (sig -> q -> q, q, [q])

auto1 : Fsm.Int.Char
auto1 = (trans, is, fs)

doAccept.(trans, is, fs). fnm=doAccept1.(trans, is, fs).fnm.is

doAccept1.(trans, is, fs).[].y=(y `elem`fs)
doAccept1.(trans, is, fs).(x::fnm).y=doAccept1.(trans, is, fs).fnm.(x `trans` y)

