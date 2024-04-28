const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());