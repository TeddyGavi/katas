const sumLargestNumbers = function(data) {
  let numMax1 = Math.max(...data);
  let numMaxIndex;
  for (let index of data) {
    if (numMax1 === data[index]) {
      numMaxIndex = index;
    }
  }
  data.splice(numMaxIndex, 1)
  let numMax2 = Math.max(...data);
  return numMax1 + numMax2;
}





console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
