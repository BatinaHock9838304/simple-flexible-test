console.log(['foo', 'bar'].concat(['baz', 'qux'].reverse().slice(1)).join(' ').replace(/a/i, 'ee').toUpperCase());
console.log("1 || 2 = "+(1 || 2));
const intermediateAppPath = path.join(buildOutputPath, 'app');