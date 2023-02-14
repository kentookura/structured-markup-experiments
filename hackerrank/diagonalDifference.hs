diagonalDifference :: [[Int]] -> Int -> Int
diagonalDifference arr n =
    abs (d - b)
        where
            d = diagonal arr n
            b = antiDiagonal arr n
            diagonal m n = sum xs
              where
                xs = [(m !! i) !! i | i <- [0 .. n-1]]
            antiDiagonal m n = sum xs
              where
                xs = [m !! i !! (n-i-1) | i <- [0 .. n-1]]

test = [[1,2,3],[4,5,6],[7,8,9]]

main = do
  putStrLn . show $ (diagonalDifference test 3 )
