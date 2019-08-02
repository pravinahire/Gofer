x = 1

sum1.0=0
sum1.(n+1)= (n+1) + s
          where
	    s = sum1.n

suml.[]=0
suml.(x::l)=x+s
	where
	s=suml.l

app.[].l2=l2
app.(x::l1).l2=x::p
	where
	p=app.l1.l2

len.[] =0
len.(x::l)=1+p
	where
	       p=len.l

rev'.[].l2 = l2
rev'.(x::l1).l2=rev'.l1.(x::l2)
rev.l1=rev'.l1.[]