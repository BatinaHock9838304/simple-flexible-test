const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const intermediateAppPath = path.join(buildOutputPath, 'app');
const appName = getAppName(channel);