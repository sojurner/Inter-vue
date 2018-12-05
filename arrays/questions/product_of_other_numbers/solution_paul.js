// solution 1
const arrayProduct = array => {
  return array.map(num => {
    let initial = 1;

    const filteredArray = array.filter(filteredInt => filteredInt !== num);

    filteredArray.forEach(filteredInt => {
      initial *= filteredInt;
    });

    return initial;
  });
};

// solution 2
const arrayProduct = arr => {
  let productArr = [];

  for (let i = 0; i < arr.length; i++) {
    const allNumbersExceptIndex = arr.filter((num, index) => index !== i);
    const productExceptIndex = allNumbersExceptIndex.reduce((product, num) => {
      return (product *= num);
    }, 1);

    finalArr.push(productExceptIndex);
  }

  return productArr;
};

