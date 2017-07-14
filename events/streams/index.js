process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => {
  console.log(`chunk: ${chunk}`)
})

process.stdin.on('end', () => {
  console.log('fin');
})