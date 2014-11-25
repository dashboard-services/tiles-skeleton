var templates = require('./templates'),
	_ = require('underscore'),
	path = require('path'),
	fs = require('fs'),
	mkdirp = require('mkdirp')
;

function createApp(appName, workingDirectory) {
	var tpls = templates.get(appName),
		appPath = path.join(workingDirectory, appName);

	_.each(tpls, function(tpl, key) {
		var filePath = path.join(appPath, key),
			fileFolder = path.dirname(filePath);

		mkdirp.sync(fileFolder, '0755');

		fs.writeFileSync(filePath, tpl);
	});

}

module.exports = {
	createApp: createApp
}
