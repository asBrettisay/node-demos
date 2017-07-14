class Job extends require('events').EventEmitter {
  process() {
    this.emit('done', {message: 'all good'});
  }
}

const job = new Job();
job.on('done', function(obj) {
  console.log('All finished!', obj.message);
})
job.process();