const sortScores = (scores, highScore) => {
  // Array of 0's with length = highScore
  const numCounts = new Array(highScore + 1).fill(0);
  // Populate the array of 0's with the occurence of a value at the respective index
  for (let score = 0; score < scores.length; score++) {
    numCounts[scores[score]] += 1;
  }
  // Declare a new array and count to keep track of sorted items
  const sortedArray = [];
  let currentSortedIndex = 0;
  // For each number in the numCounts array
  numCounts.forEach((count, num) => {
    // For the number of occurences of the item
    for (let i = 0; i < count; i++) {
      // Add to the sorted Array
      sortedArray[currentSortedIndex] = num;
      currentSortedIndex++;
    }
  });

  return sortedArray;
};
