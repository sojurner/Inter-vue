const highestProduct = arr => {
  let product = 1;
  const sortedNums = arr.sort((a, b) => b - a);

  for (i = 0; i < 3; i++) {
    product *= sortedNums[i];
  }

  return product;
};

const arr = [2, 5, 6, 3, 6];
highestProduct(arr);
