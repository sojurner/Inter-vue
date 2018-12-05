const arrayProduct = array => {
  if (array.length < 2) {
    throw new Error('Need at least 2 integers');
  }

  const finalArrayProducts = [];
  // calculating product of integers before
  let initialVal = 1;
  for (let i = 0; i < array.length; i++) {
    finalArrayProducts[i] = initialVal;
    initialVal *= array[i];
  }

  // calculating product of integers after
  initialVal = 1;
  for (let j = intArray.length - 1; j >= 0; j--) {
    finalArrayProducts[j] *= initialVal;
    initialVal *= array[j];
  }

  return finalArrayProducts;
};
