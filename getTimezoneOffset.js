const isArray = (arr) => Array.isArray(arr);
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const uniqueArr = (arr) => [...new Set(arr)];