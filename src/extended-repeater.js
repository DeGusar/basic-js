import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  str = String(str);
  
  let bonusPart = '';
  let addition = (options.addition !== undefined) ? String(options.addition) : '';
  let separator = (!!options.separator) ? options.separator : '+';
  let additionSeparator = (options.additionSeparator !== undefined) ? options.additionSeparator : '|';
  let result = '';
  let i = 0;

  do {
     if ((options.addition !== undefined)&&options.additionRepeatTimes> 1) {
     bonusPart = bonusPart + addition + additionSeparator;
     
    } else  {
      bonusPart = addition ;
    }
    i++
  } while (i < options.additionRepeatTimes - 1);
  
  if ((options.addition !== undefined)&&options.additionRepeatTimes > 1) {
    bonusPart = bonusPart + addition
  }
   
  for (let i = 0; i < options.repeatTimes - 1; i++) {
    if (options.addition !== undefined) {
      result = result + str + bonusPart + separator;
    } else {
      result = result + str + separator;
    }
    
  };

  return result = result + str + bonusPart;
  
  
}
/* npm run test -- test/extended-repeater.test.js */