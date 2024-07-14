const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};
const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
const resultingPromises = urls.map((url) => makHttpRequest(url));