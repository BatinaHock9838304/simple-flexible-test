const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);