const highestProduct = arr => {
  if (arr.length < 3) {
    return 'less than 3 numbers';
  }

  let highest = Math.max(arr[0], arr[1]);
  let lowest = Math.min(arr[0], arr[1]);

  let highestProductOf2 = arr[0] * arr[1];
  let lowestProductOf2 = arr[0] * arr[1];

  let highestProductOf3 = arr[0] * arr[1] * arr[2];

  for (let i = 2; i < arr.length; i++) {
    const current = arr[i];

    highestProductOf3 = Math.max(
      highestProductOf3,
      current * highestProductOf2,
      current * lowestProductOf2
    );

    highestProductOf2 = Math.max(
      highestProductOf2,
      current * highest,
      current * lowest
    );

    lowestProductOf2 = Math.min(
      lowestProductOf2,
      current * highest,
      current * lowest
    );

    highest = Math.max(highest, current);

    lowest = Math.min(lowest, current);
  }

  return highestProductOf3;
};

// ya...
