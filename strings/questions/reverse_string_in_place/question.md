## Write a function that takes an array of characters and reverses the letters in-place.

##### An in-place algorithm operates directly on its input and changes it, instead of creating and returning a new object. This is sometimes called destructive, since the original input is "destroyed" when it's edited to create the new output.

###### Example of in-place:

```
function squareArrayInPlace(intArray) {

  intArray.forEach((int, index) => {
    intArray[index] *= int;
  });

  // NOTE: we could make this function return undefined,
  // since we modify intArray in place.
  return intArray;
}
```

###### Example of out-of-place:

```
function squareArrayOutOfPlace(intArray) {

  // We allocate a new array that we'll fill in with the new values
  const squaredArray = [];

  intArray.forEach((int, index) => {
    squaredArray[index] = Math.pow(int, 2);
  });

  return squaredArray;
}
```
