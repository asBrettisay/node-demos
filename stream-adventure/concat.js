const through = require('through2');
const concat = require('concat-stream');

function write(buffer, encoding, next) {
  this.push(buffer.toString().split('').reverse().join(''))
  next();
}


process.stdin
  .pipe(concat(body => {
    process.stdout.write(body.toString().split('').reverse().join(''))
  }))