var microcline = require("./microcline");
var sys = require("sys");

var github = new microcline.github('kurokikaze', '51f2ded0e1e38dc4dc7368eac2df6b6f');

closing = github.close('limestone', '1');

closing.addCallback(function(issue){
    sys.puts("Closing complete. Issue is " + issue.state);
});

reopening = github.reopen('limestone', '1');

reopening.addCallback(function(issue){
    sys.puts("Reopening complete. Issue is " + issue.state);
});

creating = github.create('limestone', 'Another test issue', 'Just random sample text');

creating.addCallback(function(issue){
    sys.puts("Creation complete. Issue number is " + issue.issue.number);
});