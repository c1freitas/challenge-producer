
var config = require('config');
var Log = require('log');
var log = new Log(config.logLevel);

// frequency to invoke send, defaults to 1 sec.
var frequency = (config.frequency || 1000);

// Load Producer
var Producer = require('./lib/Producer');
var producer = new Producer();

// wrap call to send in repeating function
setInterval(function() {
    producer.send(function(err, data) {
      if (err) {
        log.error(err);
      } else {
        log.info(data);
      }
    });
  }, frequency);

process.on('uncaughtException', function(err) {
  log.error('UnCaught exception: ' + err.message);
  process.exit(1);
});
