

ascii: [Char]->[Int]

ascii.[]=[]

ascii.(x::l)=(ord.x)::ascii.l