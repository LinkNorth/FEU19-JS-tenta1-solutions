/* Implement your solution here */

function sumAboveN(numbers, n) {
  let sum = 0;

  for (let number of numbers) {
    if (number > n) {
      sum += number;
    }
  }

  return sum;
}


/* Do not touch code below this line, but make sure that these examples work */
if (sumAboveN([1, 2, 3], 2) !== 3) console.error('Invalid solution');
if (sumAboveN([], 0) !== 0) console.error('Invalid solution');
if (sumAboveN([7, 2, 3, 9], 4) !== 16) console.error('Invalid solution');
if (sumAboveN([1, 2, 3, 4, 5, 6, 7, 8, 9], 0) !== 45) console.error('Invalid solution');
