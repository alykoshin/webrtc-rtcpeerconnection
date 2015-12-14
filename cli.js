#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var webrtcRtcpeerconnection = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
    '  ' + pkg.description,
    '',
    '  Example:',
    '    webrtc-rtcpeerconnection ',
    ''
  ].join('\n'));
}

function version() {
  console.log('package version:', pkg.version);
  console.log('process.version:', process.version);
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  version();
  return;
}


webrtcRtcpeerconnection(argv[0], function() {

});
