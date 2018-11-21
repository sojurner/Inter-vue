const findClosingParens = (sentence, place) => {
  let openParensCount = 0;

  for (let index = place + 1; index < sentence.length; index++) {
    if (sentence[index] === '(') {
      openParensCount += 1;
    }

    if (sentence[index] === ')') {
      if (openParensCount === 0) {
        return index;
      }
      openParensCount -= 1;
    }
  }
  throw new Error('No closing parenthesis');
};
