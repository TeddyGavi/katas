const whereCanIPark = function (spots, vehicle) {
  let finalXY = [];
  for (let c = 0; c < spots.length; c++){
    for (let r = 0; r < spots[c].length; r++ ){
      if (spots[c][r] === 'R' && vehicle === "regular"){
        return finalXY = [...finalXY, r, c];
      } 
      else if ((spots[c][r] === "R" || spots[c][r] === "S") && vehicle === "small"){
        return finalXY = [...finalXY, r, c];
      

      }
      else if ((spots[c][r] === "R" || spots[c][r] === "S" || spots[c][r] === "M") && vehicle === "motorcycle"){
        return finalXY = [...finalXY ,r , c]
      }   
    }
  }
  return false;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))
