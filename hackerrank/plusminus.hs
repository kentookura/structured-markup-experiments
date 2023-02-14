--- Not working
plusMinus :: Fractional a =>  Ord a => [a] -> [a]
plusMinus arr = [pos, neg, zero]
    where
        pos = helper (>0)
        neg = helper (<0)
        zero = helper (==0)
        helper f = fromIntegral (length $ filter f arr) / fromIntegral (length arr)
