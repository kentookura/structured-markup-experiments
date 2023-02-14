## What we did:

You challenged me to write the `reverse` function to illustrate a general
principle, namely that we can improve the performance of recursive functions
using accumulators. It's not clear to me yet why this works. [This](./Notes.hs)
file contains a recursive function `viewZipper` which follows the same pattern.
I started by writing `viewTerm` function, and changed it to conform to the zipper input.

- https://cs.union.edu/~striegnk/learn-prolog-now/html/node51.html
- https://course.ccs.neu.edu/cs2500f14/lab9.html

For constructing strings, series `<>` will degrade performance in the long run. Use
`mconcat` if there is a single place where strings are joined, or use [builders](https://hackage.haskell.org/package/bytestring-0.11.4.0/docs/Data-ByteString-Builder.html) instead. I don't know what builders are yet.

test-driven development: spec first, then gradually implement.
TDD libraries for haskell: `hspec`.

## Things I learned

- When writing recursive functions, nontermination and totality are already nontrivial
  properties that are good to verify
- I should always cross-reference, best using URLs

## Homework:

- write a String Zipper
- regularly practice problem solving on hacker rank. (My user name is [kento1](https://www.hackerrank.com/kento1?h_r=internal-search&hr_r=1))

## Questions:

Do you have suggestions for keeping track of sources? You said I need to get a
better system.

## TODO

- Write `Zipper -> HTML` function in purescript.
