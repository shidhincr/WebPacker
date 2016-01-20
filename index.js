'use strict';
var inquirer = require('inquirer');

module.exports = function () {
	var questions = {
		type: 'input',
		name: 'mainFile',
		message: 'What is the main entry file name',
		validate: function( fileName ) {
			return !!fileName;
		}
	};
	inquirer.prompt(questions, function(answers) {
		console.log(JSON.stringify(answers));
	});
};
