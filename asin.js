var regexp  = new RegExp('{{([^}]+)}}', 'g');
var DELIM_SIZE = 4;
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');