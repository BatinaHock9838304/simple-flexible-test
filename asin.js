const symbolsPath = path.join(buildOutputPath, 'symbols');
const isTabInView = () => !document.hidden;
const removeDuplicates = (arr) => [...new Set(arr)];