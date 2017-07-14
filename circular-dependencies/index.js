const app = {};
module.exports = app;
const ctrl = require('./ctrl');

app.foo = 'bar';


console.log('done main');
setImmediate(() => console.log(module))
