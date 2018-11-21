const reverseOrder = arr => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const leftPlace = arr[left];
    arr[left] = arr[right];
    arr[right] = leftPlace;

    left++;
    right--;
  }
  return arr;
};
