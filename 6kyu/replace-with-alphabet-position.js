/*
Timothy Lee(My Solution)

given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

/*  2 ways
-create array to hold index of letters
-make all chars in string, text, lowercase and cut spaces
-search array for matching char in string
-index of array is position in alphabet

-make all chars in string, text, lowercase and cut spaces
-convert string chars to ascii number
-minus 96 from number
-result is position in alphabet
*/
function alphabetPosition(text) {
  //
  splitString = processString(text);  //remove extra characters from string
  let [replacedArray, replacedASCII] = ["", ""];
  let i = 0;

  while (i !== splitString.length) { //iterate through chars in string
    replacedArray += replaceStringArray(splitString.charAt(i)) + " ";   // 1st method
    replacedASCII += replaceStringASCII(splitString.charAt(i)) + " ";  //2nd method
    i++;
  }

  if (replacedArray == replacedASCII) { //if both are correct
    return replacedArray.trim(); //trim trailing spaces and return
  }
}

function replaceStringArray(char) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"; //reference array mapping index to position in the alphabet
  return (alphabet.indexOf(char) + 1).toString(); //return value of index lookup as a string
}

function replaceStringASCII(char) {
  return (char.charCodeAt(0) - 96).toString(); //ASCII values for lowercasae start at 97, numbers returned should start at 1
}

function processString(string) {
  let processedString = string
    .replace(/[^A-Za-z]/g, "") //replace non word with nothing
    .toLowerCase() //all letters to lowercase
    .replaceAll(" ", ""); //replace all spaces with nothing
  return processedString; //return string
}
