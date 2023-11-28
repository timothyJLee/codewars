/*
Timothy Lee(My Solution)

Function that takes a number and sums the all numbers below it that are multiples of 5 or 3.
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number) {
  if (number < 2) {
    //  does not want 1 or negatives
    return 0;
  }

  let sum = 0;
  for(let i = 2; i < number; i++){
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i; // using modulus to find remainder of zero then summing i
    }
    i++; // incrementing i
  }
  return sum; // returning the sum of multiples
}
