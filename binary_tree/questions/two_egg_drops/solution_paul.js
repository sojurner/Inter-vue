const findFloor = () => {
  let floorToFind = Math.floor(Math.random() * 100);
  let floorIncrement = 14;
  let currentFloor = 14;
  let n = 1;

  while (floorToFind > currentFloor) {
    currentFloor += floorIncrement - n;
    n++;
  }

  if (floorToFind < currentFloor) {
    currentFloor -= Math.floor(currentFloor / (n - 1)) - n;

    while (currentFloor < floorToFind) {
      currentFloor++;
    }
  }

  return currentFloor;
};
