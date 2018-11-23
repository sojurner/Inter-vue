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
