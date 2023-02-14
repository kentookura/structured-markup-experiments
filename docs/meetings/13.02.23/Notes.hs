data TermZipper = TermZipper { filler :: Term, context :: TermContext }

data Term
  = Var String
  | Lambda String Term
  | App Term Term
  | If Term Term Term

data TermContext
  = Root
  | Lambda_1 String TermContext
  | App_1 TermContext Term
  | App_2 Term TermContext
  | If_1 TermContext Term Term
  | If_2 Term TermContext Term
  | If_3 Term Term TermContext

viewTerm :: Term -> String
viewTerm t = case t of
  Var s -> s
  Lambda s t -> mconcat ["\\ " , s , "( " , viewTerm t , " )"]
  App f x -> mconcat [viewTerm f , viewTerm x]
  If b t e -> mconcat ["if ", viewTerm b , " then " , viewTerm t , " else " , viewTerm e]

viewZipper :: TermZipper -> String
viewZipper z = helper (context z) (viewTerm (filler z))
  where
    helper :: TermContext -> String -> String
    helper i o = case i of
      Root         -> mconcat ["[" , o , "]"]
      Lambda_1 s c -> mconcat ["[ \\ " , s , "-> " , helper c o , " ]"]
      App_1 c t    -> mconcat ["[ " , helper c  o , viewTerm t, " ]"]
      App_2 t c    -> mconcat ["[", viewTerm t , helper c o, "]"]
      If_1 c t2 t3 -> mconcat ["[", helper c  o , viewTerm t2 , viewTerm t3, "]"]
      If_2 t1 c t3 -> mconcat ["[", viewTerm t1 ,  helper c o , viewTerm t3, "]"]
      If_3 t1 t2 c -> mconcat ["[", viewTerm t1 , viewTerm t2 , helper c o, "]"]

reverse :: [a] -> [a]
reverse xs = helper xs []
  where helper :: [a] -> [a] -> [a]
        helper i o = case i of
          []   -> o
          x:xs -> helper xs (x:o)

test0 = TermZipper
       { filler = Lambda "s" (Var "x")
       , context = Root }

test1 = TermZipper
       { filler = Lambda "s" (Var "x")
       , context = Lambda_1 "t" Root }

test2 = TermZipper
       { filler = Lambda "s" (Var "x")
       , context = App_1 Root (Var "test2") }

test3 = TermZipper
       { filler = Lambda "s" (Var "x")
       , context = App_2 (Var "test3") Root }

test4 = TermZipper
       { filler = Lambda "s" (Var "x")
       , context = If_1 Root (Var "then_4") (Var "else_4") }

test5 = TermZipper
       { filler = Lambda "s" (Var "x")
       , context = If_2 (Var "bool_5") Root (Var"else_5")}

test6 = TermZipper
       { filler = Lambda "s" (Var "x")
       , context = If_3 (Var "bool_6") (Var "then_6") Root }

main :: IO ()
main = do
  putStrLn . viewZipper $ test0
  putStrLn . viewZipper $ test1
  putStrLn . viewZipper $ test2
  putStrLn . viewZipper $ test3
  putStrLn . viewZipper $ test4
  putStrLn . viewZipper $ test5
  putStrLn . viewZipper $ test6
