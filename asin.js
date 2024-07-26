const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const updated = numbers.filter(element => element > 6);