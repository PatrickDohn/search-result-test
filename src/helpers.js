import _ from 'lodash';

/**
 *
 * @param {Object} obj -  The data from the API call
 * @param {String} str - The word you want to search for in that object
 * @returns Number
 */

const calculateScore = (obj, str) => {
  // Only looking for categories and tags
  let result = 0;

  // if the name of the product matches the string were searching for that gets the highest score
  if (obj.name.includes(str)) {
    result += 1000;
  }

  // build reg expression for easier match search
  const reg = new RegExp(str, 'gi');
  // use categories and tag keys as sub matches and allocate more points to the result if there is a match
  const strCategories = JSON.stringify(obj.categories);
  const strTags = JSON.stringify(obj.tags);

  // if there is a match in categories then multiply the length of the match array by 100 and add to result
  result = result + (strCategories.match(reg) ? strCategories.match(reg).length : 0) * 100;
  // if there is a match in tags then multiply the length of the match array by 100 and add to result
  result = result + (strTags.match(reg) ? strTags.match(reg).length : 0) * 50;

  return result;
};

/**
 * Takes object of nutrition facts and return the amount of that nutrient if the object is not undefined
 * @param {Object} obj -  The nutrition facts
 * @returns Number
 */
const getNutritionField = (obj) => {
  if (obj === undefined) {
    return 0;
  }
  return Number(obj.amount);
};

const helpers = { calculateScore, getNutritionField };

export default helpers;
