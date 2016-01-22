'use strict';
var inquirer = require('inquirer');
var chalk = require('chalk');
var fileExists = require('file-exists');
var fs = require('fs');

module.exports = function () {
	var webpackConfig = {};

	var questions = {
		type: 'input',
		name: 'entryFile',
		message: 'What is the main entry file name',
		validate: function( fileName ) {
			return !!fileName;
		}
	};
	inquirer.prompt(questions, function(answers) {
		if(answers.entryFile) {
			webpackConfig['entry'] = './'+ answers.entryFile;
		}
		if(!fileExists('webpack.config.js')){
			var output = 'module.exports = ' + JSON.stringify(webpackConfig);
			fs.writeFile('webpack.config.js', output, function (err) {
				if (err) return console.log(err);
				console.log(chalk.green('Webpack file generated with config :  %s'), JSON.stringify(webpackConfig));
			});
		} else {
			console.log(chalk.red('Cannot write file. webpack.config.js already exist'));
		}
	});
};
