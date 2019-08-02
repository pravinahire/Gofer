ctype Sexp where
  Symb : String -> Sexp
  Num : Int -> Sexp
  Nil : Sexp
  Cons : Sexp -> Sexp -> Sexp


