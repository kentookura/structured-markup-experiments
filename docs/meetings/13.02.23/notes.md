## What we did:

You challenged me to write the `reverse` function to illustrate a general
principle, namely that we can improve the performance of recursive functions
using accumulators. It's not clear to me yet why this works. [This](./Notes.hs)
file contains a recursive function `viewZipper` which follows this pattern.

- https://cs.union.edu/~striegnk/learn-prolog-now/html/node51.html
- https://course.ccs.neu.edu/cs2500f14/lab9.html

For constructing strings, `<>` will degrade performance in the long run. Use
`mconcat` or builders instead. I don't know what builders are yet.

test-driven development: spec first, then gradually implement.
TDD libraries for haskell: `hspec`.

## Things I learned

- When writing recursive functions, nontermination is already a nontrivial
  property that is good to verify

## Homework:

- write a String Zipper
- regularly practice problem solving on hacker rank. (My user name is kento1)

## Questions:

Do you have suggestions for keeping track of sources? You said I need to get a
better system.

## TODO

- Write `Zipper -> HTML` function in purescript.
