const split = require('split');
const through = require('through2');

let lineNumber = 1;
const changeCase = function(buffer, encoding, next) {
  if (lineNumber % 2 === 0) {
    this.push(buffer.toString().toUpperCase() + '\n')
  } else {
    this.push(buffer.toString().toLowerCase() + '\n')
  }
  lineNumber++;
  next();
}

process.stdin
  .pipe(split())
  .pipe(through(changeCase))
  .pipe(process.stdout)