import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let arr1 = Array.from(String(s1));
  let arr2 = Array.from(String(s2));
  let result = [];
  let map = arr1.reduce((acum, i) => {
    acum[i] = acum[i] ? acum[i] + 1 : 1;
    return acum;
  }, {});
  for (let i = 0; i < arr2.length; i++) {
    let current = arr2[i];
    let count = map[current];
    if (count && count > 0) {
      result.push(current);
      map[current] -= 1;
     }
  }
  return result.length
   
  
}
