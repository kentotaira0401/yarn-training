'use strict';
const request = require('request');
request('http://www.google.com', (error, responce, body) => {
  console.log(body);
});