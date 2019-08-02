
pro.gs
-------------------------------


type De=(Int,Char,Int)


del: [De]-> String -> String

--f1: Int-> Char -> Int -> String -> String

--f0.q.q0.f.df="int func(char a,int state) \n {" ++  (del.df."") ++ "\n } \n  \n bool fsm(char s[10]) \n { \n int state=" ++(show.q0)++ "; \n for(int j=0;s[j]!=NULL ;j++) \n { \n state=func(s[j],state); \n } \n if(state=="++ (show.f)++ ") \n return 1; \n else return 0; \n }"

--f01.q.q0.(x::xs).df="#include<stdio.h> \n #include<stdbool.h> \n int func(char a,int state) \n {" ++  (del.df."") ++ "\n } \n  \n bool fsm(char s[10]) \n { \n int state=" ++(show.q0)++ "; \n for(int j=0;s[j]!=NULL ;j++) \n { \n state=func(s[j],state); \n } \n if(state=="++ (show.x)++ (f3.xs."")++ ") \n return 1; \n else return 0; \n } "

f02.i.q.q0.(x::xs).df="#include<stdio.h> \n #include<stdbool.h> \n \n int func(char a,int state) \n {" ++  (del.df."") ++ "\n } \n  \n bool fsm(char s[10]) \n { \n int state=" ++(show.q0)++ "; \n for(int j=0;s[j]!=NULL ;j++) \n { \n state=func(s[j],state); \n } \n if(state=="++ (show.x)++ (f3.xs."")++ ") \n return 1; \n else return 0; \n } \n \n  int main() \n { \n char s[10]; \n scanf(\"%s\",&s); \n printf(\"%d\",fsm(s)); \n return 0; \n }"

del.[].cod=cod
del.(x::xs).cod=del.xs.(f2.[x].cod)

--f1.ini.ch.fin.cod=cod ++ " if (a== '" ++ [ch] ++ "' && state ==" ++ show.ini ++ ") return " ++ show.fin++ ";"

f2.[(ini,ch,fin)].cod= cod ++ "\n if (a== '" ++ [ch] ++ "' && state ==" ++ show.ini ++ ") return " ++ show.fin++ ";"

f3.(x::xs).cod=f3.xs.(f31.x.cod)
f3.[].cod=cod
f31.x.cod=cod ++" || state == " ++ (show.x)
-------------------------------------------
temp=[(1,'c',2),(2,'d',4),(3,'f',7)]
tf.(x::xs)=[(a)| (a,b,c)<- x]
tf1.q.q0.f=show.q0 ++ show.f ++ ""

