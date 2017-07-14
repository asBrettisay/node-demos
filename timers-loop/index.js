console.log('Loading index.js...');
const fs = require('fs');
const myModule = require('./myModule');

/**
 * Each of these is executed in the main module.
 * Non-deterministic order of events
 */
setImmediate(() => {
  console.log('Main immediate');
})

setTimeout(() => {
  console.log('Main timeout');
}, 0)

process.nextTick(() => {
  console.log('main tick')
})

/**
 * Executed in the event loop, because these happen after I/O.
 */

fs.readFile('./test.txt', () => {
  // Check phase
  setImmediate(() => {
    console.log('Immediate')
  })

  // Timer phase (Ordered by poll phase)
  setTimeout(() => {
    console.log('Timeout')
  }, 0)
  
  // Immediately after poll phase
  process.nextTick(() => {
    console.log('Tick')
  })
})


module.exports = {
  message: 'foo'
}