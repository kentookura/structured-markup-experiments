We can improve the performance of recursive functions using accumulators:

- https://cs.union.edu/~striegnk/learn-prolog-now/html/node51.html
- https://course.ccs.neu.edu/cs2500f14/lab9.html

It's not clear to me yet why this improves performance.
[](./Reverse.hs) contains a recursive function `viewZipper` which follows this
pattern.

For constructing strings, `<>` will degrade performance in the long run. Use
`mconcat` or builders instead.

test-driven development: spec first, then gradually implement.
TDD libraries for haskell: `hspec`.

Homework:

- write a String Zipper
- regularly practice problem solving on hacker rank. (My user name is kento1)

Questions:

Do you have suggestions for keeping track of sources? You said I need to do
get a better system.
