import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
 
  if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [...arr];
  if (newArr[0] === '--discard-prev' || newArr[0]==='--double-prev') {
    newArr.splice(0, 1);
  }
  for (let i = 0; i < newArr.length-1; i++){
    if (newArr[i] === '--discard-next') {
      newArr.splice(i + 1, 1);
    } else if (newArr[i] === '--discard-prev') {
      newArr.splice(i - 1, 1);
      i--;
    } else if (newArr[i] === '--double-next') {
      
      newArr.splice(i + 1, 0, newArr[i + 1]);
      

     
    } else if (newArr[i] === '--double-prev') {
     
      newArr.splice(i - 1, 0, newArr[i - 1])
      i++
    }
  }
  
  let result = newArr.filter(element => element !== "--discard-prev" && element !== "--double-next" && element!== "--double-prev" && element!=="--discard-next");
  console.log(result);
  return result;
}
