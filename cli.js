#!/usr/bin/env node
'use strict';
var meow = require('meow');
var webpacker = require('./');

var cli = meow([
	'Usage',
	'  $ webpacker [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ webpacker',
	'  unicorns & rainbows',
	'  $ webpacker ponies',
	'  ponies & rainbows'
]);

console.log(webpacker(cli.input[0] || 'unicorns'));
