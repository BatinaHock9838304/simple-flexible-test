const flattenedArray = arr => [].concat(...arr);
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const symbolsPath = path.join(buildOutputPath, 'symbols');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();