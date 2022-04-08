const calculateScore = (obj, str) => {
  // Only looking for categories and tags
  let result = 0;

  if (obj.name.includes(str)) {
    result += 1000;
  }

  const reg = new RegExp(str, 'gi');
  const strCategories = JSON.stringify(obj.categories);
  const strTags = JSON.stringify(obj.tags);

  result = result + (strCategories.match(reg) ? strCategories.match(reg).length : 0) * 100;
  result = result + (strTags.match(reg) ? strTags.match(reg).length : 0) * 50;

  return result;
};

const helpers = { calculateScore };

export default helpers;
