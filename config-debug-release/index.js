var framework = require('total.js');
var http = require('http');
var debug = true;

framework.run(http, debug);

// if debug == true
// 	  framework load config-debug
// else
//    frmaework load config-release
//
// config will refresh every 20 minutes
//
// or
//
// framework.run(http, { debug: true, name: 'TEST' }, port);