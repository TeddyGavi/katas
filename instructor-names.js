const instructorWithLongestName = function(instructors) {
  let nameLengthArr = [];
  let longestNameNum;
  let indexOfLongestName;
  for (let i of instructors){
    nameLengthArr.push(i.name.length);
  }
  longestNameNum = Math.max(...nameLengthArr);
  indexOfLongestName = nameLengthArr.indexOf(longestNameNum);
  return instructors[indexOfLongestName];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
