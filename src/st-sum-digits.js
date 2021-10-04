import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
 /*  let arr = Array.from(String(n), Number);
  let sum = arr.reduce((a, b) => a + b);
  return sum < 10 ? sum : getSumOfDigits(sum); */
  let arr = Array.from(String(n), Number);
  let sum = 0;
  while (sum >10 ) {
    for (let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    arr = Array.from(String(sum), Number);
  }
  
}
