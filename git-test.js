var microcline = require("./microcline");
var sys = require("sys");

var github = new microcline.github('username', '00000000000000000000000000000000');

// Project 'example', issue #1

closing = github.close('example', '1');

closing.addCallback(function(issue){
    sys.puts("Closing complete. Issue is " + issue.state);
});


reopening = github.reopen('example', '1');

reopening.addCallback(function(issue){
    sys.puts("Reopening complete. Issue is " + issue.state);
});


creating = github.create('example', 'Another test issue', 'Just random sample text');

creating.addCallback(function(issue){
    sys.puts("Creation complete. Issue number is " + issue.number);
});