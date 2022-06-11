const checkAir = function (samples, threshold) {
  // Code here!
  let cleanTotal = 0;
  let dirtyTotal = 0;
  for (let i = 0; i < samples.length; i++){
    if (samples[i] === "clean"){
      cleanTotal ++;
    } else {
      dirtyTotal ++;
    }
  }
  let percentTotalDirty = ((dirtyTotal / samples.length));
  if (percentTotalDirty > threshold){
    return "Polluted";
  } else {
    return "Clean";
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))
