const http = require('http'),
      fs   = require('fs');

const server = http.createServer((req, res) => {
  // fs.readFile(__dirname + '/sample.txt', (err, file) => {
  //   res.end(file);
  // })
  const stream = fs.createReadStream(__dirname + '/sample.txt');

  stream.pipe(res);
})

server.listen(3000);