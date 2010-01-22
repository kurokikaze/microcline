## Overview
Microcline is simple Github API bindings for Node.js to simplify unit-testing. It can create, close and reopen issues on Github programmatically.

## Usage
Opening new issue in project 'example-js'

	var microcline = require("./microcline");
	var github = new microcline.github('username', 'your-Github-API-token');

	opening = github.create('example-js', 'New issue name', 'Issue text: everything is broken, nothing works');

	opening.addCallback(function(issue){
		sys.puts("Closing complete. Issue is " + issue.state);
	});

Closing issue #1 in project 'example-js'

	var microcline = require("./microcline");
	var github = new microcline.github('username', 'your-Github-API-token');

	closing = github.close('example-js', '1');

	closing.addCallback(function(issue){
		sys.puts("Closing complete. Issue is " + issue.state);
	});

Reopening issue #1 in project 'example-js'

	var microcline = require("./microcline");
	var github = new microcline.github('username', 'your-Github-API-token');

	reopening = github.reopen('example-js', '1');

	reopening.addCallback(function(issue){
		sys.puts("Reopening complete. Issue is " + issue.state);
	});
