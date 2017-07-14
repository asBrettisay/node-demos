const fs = require('fs');
const zlib = require('zlib');

function logSize(tag) {
  return function(err, stat) {
    console.log(tag);
    console.log(stat.size);
  }
}

const read = fs.createReadStream('./sample.txt');
const gzip = zlib.createGzip();
const write = fs.createWriteStream('./sampleOut.txt.gz');

read.pipe(gzip).pipe(write);

write.on('close', () => {
  console.log('write end')
  fs.stat('./sample.txt', logSize('sample'));
  fs.stat('./sampleOut.txt.gz', logSize('sampleOut'))
})