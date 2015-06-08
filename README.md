## Producer Application
Sample producer application for the InVision challenge. Will generate annd send messages
to the host/port defined at set intervals. Logs all responses to the console.

### Prerequisites
The Consumer application must be installed on a server and running.

### Install

1. `> git clone https://github.com/c1freitas/challenge-producer.git`
2. `> npm install`

There is a config file  `./config/default.json` that defines which host/port to send
requests to and how frequently to send the requests. Also defines what log level to display.
Log levels are defined at https://www.npmjs.com/package/log
```javascript
{
  "host": "localhost", // host name or ip address
  "port": 3000,        // port
  "frequency": 500,    // in ms
  "logLevel" : "INFO"  // log level
}
```

### Run

1. `> npm start`

Will start generating and sending requests at the predefined intervals, logging all responses.
Start multiple instances to send data more frequently, or increase the predefined frequency.

### test

1. `> npm test`

Runs unit tests with Mocha.
