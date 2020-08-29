function myAverage(array) {
  let arrAv = array.reduce((acc, eachItem) => {
    return acc + eachItem;
  }, 0);
  return arrAv / array.length;
}

console.log(myAverage([4, 6, 8, 12, 16]));

function myMedian(array) {
  array.sort((a, b) => a - b);
  const half = Math.floor(array.length / 2);

  if (array.length % 2) {
    return array[half];
  } else {
    return (array[half - 1] + array[half]) / 2.0;
  }
}

console.log(myMedian([2, 4, 6, 8, 10]));

//calculate the average
function getAverage(array) {
  const arrAvg = array.reduce((acc, item) => {
    return acc + item;
  }, 0);
  return arrAvg / array.length;
}
console.log(getAverage([4, 6, 8, 12, 16]));

function getAverageMedian() {
  let averageMedian = {
    average: getAverage([4, 6, 8, 12, 16]),
    median: myMedian([4, 6, 8, 12, 16]),
  };

  return averageMedian;
}

console.log(getAverageMedian());
