import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  
  if (date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)) {
    let month = date.getMonth();
    if (month > 1 && month < 5) {
      return 'spring'
    } else if (month > 4 && month < 8) {
      return 'summer'
    } else if (month > 7 && month < 11) {
      return 'autumn'
    } else return 'winter'

  } else if (typeof(date)=== 'undefined') {
    console.log('undefined', date)
     return 'Unable to determine the time of year!';
  } else {
    console.log(date, 'other');
    throw new Error("Invalid date!");
  }
}
