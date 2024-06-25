const minNumber = arr => Math.min(...arr);
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};