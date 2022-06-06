const numberOfVowels = function(data) {
  const spreadWord = [...data];
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (i = 0; i < vowels.length; i++){
    for (j = 0; j < spreadWord.length; j++){
      if (vowels[i] === spreadWord[j]){
        vowelCount ++;
      }
    }
  }
  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
