/**
 * CreateDate 2016/7/18
 * Author Frank.Zhang
 * Description
 */

'use strict';


var express = require('express');
var environment = require('config/environment');

var app =express();
var http=require('http');
var server=http.createServer(app);

require('config/express')(app);
require('router')(app);

// Start server
server.listen(environment.port,function () {
  console.log('Express server listening on %d', environment.port);
});

process.on('uncaughtException',function(err){
  console.error(err);
});
