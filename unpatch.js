const randomString = () => Math.random().toString(36).slice(2);
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log(typeof typeof 1);