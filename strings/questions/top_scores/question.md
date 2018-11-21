###### Write a function that takes

- an array of unsortedScores
- a highest possible score in the game

###### and returns a sorted array of scores.

function should take less than `O(nlgn)` time.

###### Example:

```
const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);
* returns [91, 89, 65, 53, 41, 37] *
```
