'use strict';

var config = require('config');

var Log = require('log');
var log = new Log(config.logLevel);
var http = require('http');

/**
 * Constructor. We could pass in the host/port information here
 *   instead of pulling directly from config, but for simplicity
 *   I left it this way.
 */
function Producer() {
  this._host = config.host;
  this._port = config.port;
  this._equal = '=';
  this._operations = ['+', '-', '*', '/'];
}

/**
 * generates a number between 1-100
 */
Producer.prototype.generateNumber = function() {
  return Math.floor((Math.random() * 100) + 1);
}

/**
 * Returns a random operation from the operations array.
 */
Producer.prototype.randomOperator = function() {
  return this._operations[Math.floor(Math.random() * 4)];
}

/**
 * Creates the arithmetic operation.
 */
Producer.prototype.createOperation = function() {
  var op = this.generateNumber() + this.randomOperator() + this.generateNumber();
  return op + this._equal;
}

/**
 * Sends the request, invoking the callback with response or error
 *  if error occurs.
 */
Producer.prototype.send = function(callback) {
  var options = {
    host: this._host,
    port: this._port,
    method: 'POST'
  };

  var req = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
      callback(null, data);
    });
  });

  req.on('error', function(e) {
    callback(e);
  });

  req.write(this.createOperation());
  req.end();
}

module.exports = Producer;
