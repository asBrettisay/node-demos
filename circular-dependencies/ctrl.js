const index = require('./index');

console.log(index);

setImmediate(() => console.log(index));


console.log('done ctrl');