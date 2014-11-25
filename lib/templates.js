
function getTemplates(appName) {
	var templates = {};

	templates[".gitignore"] = [
		"node_modules/",
		"server/config/settings.json",
		"/index.js",
		"*.log",
	].join('\n');

	templates["package.json"] = [
		'{',
		'	"name": "'+ appName +'",',
		'	"size": "s",',
		'	"version": "0.0.1",',
		'	"description": "",',
		'	"main": "index.js",',
		'	"dependencies": {',
		'		"debug": "^2.1.0",',
		'		"express": "^4.10.1"',
		'	}',
		'}',
	].join('\n');

	templates["index.js"] = [
		"// Entry point for stand-alone test. Don't add code here!",
		'',
		"var debug = require('debug')('"+ appName +":wrapper'),",
		"	 app = require('./server');",
		'',
		"app.listen(3000, function() {",
		"	debug('App on port 3000');",
		"})",
	].join('\n');


	templates["server/index.js"] = [
		"var debug = require('debug')('"+ appName +":main'),",
		"	express = require('express'),",
		'	app = express(),',
		"	fs = require('fs'),",
		"	path = require( 'path' );",
		'',
		"app.use('/', express.static(__dirname + '/../client/public'));",
		'',
		"app.get('/', function(req, res, next) {",
		"	res.set('Content-Type', 'text/html');",
		"	fs.createReadStream( path.join( __dirname, '..', 'client', 'index.html' ) ).pipe( res );",
		"});",
		'',
		'module.exports = app;',
	].join('\n');

	templates["server/config/index.js"] = "module.exports = require('./settings');";


	templates["server/config/settings.json"] = [
		'{',
		'	"add your secret config": "here",',
		"}",
	].join('\n');

	templates["client/index.html"] = [
		'<!DOCTYPE html>',
		'<html lang="en">',
		'  <head>',
	    '    <meta charset="utf-8">',
	    '    <meta http-equiv="X-UA-Compatible" content="IE=edge">',
	    '    <meta name="viewport" content="width=device-width, initial-scale=1">',
	    '    <title>Auto-generated APP: '+ appName +'!</title>',
	  	'  </head>',
	  	'  <body>',
	  	'    Your amazing tile here!',
	  	'',
	    '    <!-- jQuery for AJAX request -->',
	    '    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>',
	    '',
	    '    <!-- The App -->',
	    '    <script src="js/main.js"></script>',
		'  </body>',
		'</html>',
	].join('\n');

	templates["client/public/js/main.js"] = [
		'$(function() {',
		"	// Remember to don't use abolute paths.",
		"	console.log('Add your JS magic too');",
		'});',
	].join('\n');

	return templates;
}

module.exports = {
	get: getTemplates
};
