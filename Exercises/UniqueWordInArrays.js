/*
Given an array of string arrays, find all the words that only appear in a single array
ex: [['mshike','mko','mshike','bozho'],['mshike','bamapi']] 
        returns ['mko','bozho','bamapi']

        Solution:
        - Clean individual arrays of multiples
        - Create counting hashmap to keep track of multiples vs unique in constant time
        - convert to array and filter for counts of 1
        - convert to object and print
*/

const array = [
  ["mshike", "mko", "mshike", "bozho"],
  ["mshike", "bamapi"],
];

// cleaning individual arrays of multiple values because we dont care about those
// converting to Obj
const cleanedObj = (() => {     
  let cleaned = [];
  array.forEach((wordArray) => {
    cleaned.push([...new Set(wordArray)]); //Sets only have unique values
  });
  return cleaned;
})();

console.log(cleanedObj);
 singleArrayWordsCountingHashmap(cleanedObj);

function singleArrayWordsCountingHashmap(wordSetsObj) {
  let hashmap = {};
  wordSetsObj.forEach((wordArray) => {
    wordArray.forEach((word) => {
      // counting hashmap object
      // ternary operator to set to 1 if place in hm is undefined else increment
      hashmap[word] =(hashmap[word] == undefined) ? 1 : hashmap[word] + 1;
    });
  });

  // convert to array for easy filtering
  const uniqueWords = Object.entries(hashmap).filter(([key, value]) => value == 1);
  // convert back to obj and log
  const uniqueWordsObject = Object.fromEntries(uniqueWords);
  console.log(uniqueWordsObject);
}
