console.log(1 +  +"2" + "2");
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';