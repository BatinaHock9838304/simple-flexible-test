const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const removeDuplicates = (arr) => [...new Set(arr)];
var regexp  = new RegExp('{{([^}]+)}}', 'g');
const stringReverse = str => str.split("").reverse().join("");