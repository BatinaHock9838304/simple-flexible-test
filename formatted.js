const isWeekday = (date) => date.getDay() % 6 !== 0;
const uniqueArr = (arr) => [...new Set(arr)];