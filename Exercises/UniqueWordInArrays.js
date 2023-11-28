/*
Given an array of string arrays, find all the words that only appear in a single array
ex: [['mshike','mko','mshike','bozho'],['mshike','bamapi']] 
        returns ['mko','bozho','bamapi']
*/


const array = [
  ["mshike", "mko", "mshike", "bozho"],
  ["mshike", "bamapi"],
];

const cleanedObj = (() => {     // arrow IIFE
  let cleaned = [];
  array.forEach((wordArray) => {
    cleaned.push([...new Set(wordArray)]); //Sets only have unique values
  });
  return cleaned;
})();

console.log(cleanedObj);


 //singleArrayWords(array);

function singleArrayWords(wordSetsObj) {
  // single word array
  let singleWords = [];
  //for loop for first array
  for (let i = 0; i < array.length; i++) {
    //for loop second array
    for (let j = 0; j < array[i].length; j++) {
      if (array) console.log(array[i][j]);
    }
    console.log(array[i]);
  }
}

function singleArrayWordsBuiltIn(wordSetsObj) {
  // single word array
  let singleWords = [];

  //for loop for first array
  for (let i = 0; i < array.length; i++) {
    //built in string compare method
  }
}

function singleArrayWordsHashmap(wordSetsObj) {
  wordSetsObj.forEach((wordArray) => {
    wordArray.forEach((word) => {
      // counting hashmap object
    });
  });
}
