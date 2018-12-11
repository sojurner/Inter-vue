## Bottom-up algorithms

- Approach to avoid recursion, as it saves memory cost that recursion incurs when building up the call stack.

###### Starts from the beginning as oppose to from the end and working backwards in recursion.

#### Example:

Recursive method

```
function product1ToN(n) {
  return (n > 1) ? (n * product1ToN(n-1)) : 1;
}
```

Bottom-up

```
function product1ToN(n) {
  let result = 1;

  for (let num = 1; num <= n; num++) {
    result *= num;
  }

  return result;
}
``
```
