function numberOfWays(amount, denominations) {
  const waysOfDoing = new Array(amount + 1).fill(0);
  waysOfDoing[0] = 1;
  denominations.forEach(denomination => {
    for (
      let higherAmount = denomination;
      higherAmount <= amount;
      higherAmount++
    ) {
      const higherAmountRemaining = higherAmount - denomination;
      waysOfDoing[higherAmount] += waysOfDoing[higherAmountRemaining];
    }
    return waysOfDoing[amount];
  });
}
