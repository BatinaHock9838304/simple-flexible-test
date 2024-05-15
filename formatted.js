const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const isEmptyObject = obj => Object.keys(obj).length === 0;