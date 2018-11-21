const arrayProduct = array => {
  if (array.length < 2) {
    throw new Error('Need at least 2 integers');
  }

  const finalArrayProducts = [];
  let initialVal = 1;
  // calculating product of integers before
  for (let i = 0; i < array.length; i++) {
    finalArrayProducts[i] = initialVal;
    initialVal *= array[i];
  }

  initialVal = 1;
  // calculating product of integers after
  for (let j = intArray.length - 1; j >= 0; j--) {
    finalArrayProducts[j] *= initialVal;
    initialVal *= array[j];
  }

  return finalArrayProducts;
};
