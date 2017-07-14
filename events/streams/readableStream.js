const fs = require('fs');

let stream = fs.createReadStream('./sample.txt');

stream.on('readable', () => {
  let chunk;
  let data;

  while(null !== (chunk = stream.read())) {
    console.log(`Got ${chunk.length} bytes of data`);
  }
})
