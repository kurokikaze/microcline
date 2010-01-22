(function() {
    var sys = require("sys"),
       http = require("http");

    exports.github = function(login, token) {
        this.login = login;
        this.token = token;
    };

    var proto = exports.github.prototype;
    proto.reopen = function(project, issue_id, callback) {
        var gitserver = http.createClient(80, "github.com");
        var req_body = 'login=' + escape(this.login) + '&token=' + escape(this.token);

        var promise = new process.Promise();

        var request = gitserver.request("POST", "/api/v2/json/issues/reopen/" + this.login + "/" + project + "/" + issue_id, {"Host":"github.com", "Agent":"Microcline/0.01", "Content-Type": "application/x-www-form-urlencoded", "Content-Length": req_body.length });
        request.sendBody(req_body);
        request.finish(function (response) {
          response.addListener("body", function (chunk) {
              if (response.statusCode == 200) {
                promise.emitSuccess(JSON.parse(chunk).issue);
              } else {
                promise.emitError(response.statusCode);
              }
          });
        });

        if (callback) {
            promise.addCallback(callback);
        }

        return promise;
    };

    proto.close = function(project, issue_id, callback) {
        var gitserver = http.createClient(80, "github.com");
        var req_body = 'login=' + escape(this.login) + '&token=' + escape(this.token);

        var promise = new process.Promise();

        var request = gitserver.request("POST", "/api/v2/json/issues/close/" + this.login + "/" + project + "/" + issue_id, {"Host":"github.com", "Agent":"Microcline/0.01", "Content-Type": "application/x-www-form-urlencoded", "Content-Length": req_body.length });
        request.sendBody(req_body);
        request.finish(function (response) {
          response.addListener("body", function (chunk) {
              if (response.statusCode == 200) {
                promise.emitSuccess(JSON.parse(chunk).issue);
              } else {
                sys.puts('Error: ' + response.statusCode);
                promise.emitError(response.statusCode);
              }
          });
        });

        if (callback) {
            promise.addCallback(callback);
        }

        return promise;
    };

    proto.create = function(project, title, text, callback) {
        var gitserver = http.createClient(80, "github.com");
        var req_body = 'login=' + escape(this.login) + '&token=' + escape(this.token) + '&title=' + escape(title) + '&body=' + escape(text);

        var promise = new process.Promise();

        var request = gitserver.request("POST", "/api/v2/json/issues/open/" + this.login + "/" + project, {"Host":"github.com", "Agent":"Microcline/0.01", "Content-Type": "application/x-www-form-urlencoded", "Content-Length": req_body.length });
        request.sendBody(req_body);
        request.finish(function (response) {
          response.addListener("body", function (chunk) {
              if (response.statusCode == 200) {
                promise.emitSuccess(JSON.parse(chunk).issue);
              } else {
                sys.puts('Error: ' + response.statusCode);
                promise.emitError(response.statusCode);
              }
          });
        });

        if (callback) {
            promise.addCallback(callback);
        }

        return promise;
    };

})();