const urlEncode = function(text) {
  let with20Arr = [];
  trimed = text.trim();
  trimSplit = trimed.split('');
  for (i = 0; i < trimSplit.length; i++){
    if (trimSplit[i] === " "){
       trimSplit[i] = "%20";
    } 
  }

  return trimSplit.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
