const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);