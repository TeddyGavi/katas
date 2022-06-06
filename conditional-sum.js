function conditionalSum(values, condition){
  let evenSum = 0;
  let oddSum = 0;
  if (condition === "even"){
    for (let i of values){
      if (i % 2 === 0){
  
        evenSum += i;
      }
    }
    return evenSum;
  }
  else if (condition === "odd"){
    for (let i of values){
      if (i % 2 !== 0){
  
        oddSum += i;
      }
    }
    return oddSum;
  }
  else {return 0};
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));