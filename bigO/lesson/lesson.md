### The Idea behind big O notation.

- How long an algorithm takes to run.

Runtime is expressed in terms of how quickly it grows relative to the input:

- Relative to the input
  - Input is referred to as "n"
  - If the size of the input were to change, how would it affect the runtime of the function.
    `[{name: 'Paul'}, {name: 'Ben'}, {name: 'Mike'}, {name: 'Gray'}]` vs `'Paul'`

#### Examples:

O(1) - constant time

```
function printFirstItem(items) {
  console.log(items[0])
}
```

- Only requires one step, regardless of input size

O(n) - linear time `n is the number of items in the array`

```
function printAll(items) {
  items.forEach(item => {
    console.log(item)
  })
}
```

- If input is an array of 1,000 items it would log 1,000 times

O(n^2) - quadratic time

```
function printAll(items) {
  items.forEach(first => {
    items.forEach(second => {
      console.log(first, second)
    })
  })
}
```

- If input is 100 items it would log 10,000 times

###### N could be the actual input or the size of the input

```
function tryMeNTimes(n) {
  for (let i = 0; i < n ; n++) {
    console.log('You suk')
  }
}

function printAll(items) {
  items.forEach(item => {
    console.log(item)
  })
}
```

n can be an actual number thats an input to our function, and other times it can be number of items in an input array.

### Drop Constants

```
function printAll(items) {
  items.forEach(item => {
    console.log(item);
  });

  items.forEach(item => {
    console.log(item);
  });
}
```

O(2n) -> O(n)

```
function printAll(items) {
  console.log(items[0]);

  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log('hi');
  }
}
```

O(1 + n/2 + 100) -> O(n)

### Worst Case

```
  function contains(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle) {
        return true;
      }
    }

  return false;
}
```

best case: O(1)
worst case: O(n) \*

### Space complexity
