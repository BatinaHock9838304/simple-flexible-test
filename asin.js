const toggleBool = () => (bool = !bool);
const stringReverse = str => str.split("").reverse().join("");
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));