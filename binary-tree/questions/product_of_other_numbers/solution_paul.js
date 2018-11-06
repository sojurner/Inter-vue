const getProducts = arr => {
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

const arr = [1, 7, 3, 4];
getProducts(arr);
