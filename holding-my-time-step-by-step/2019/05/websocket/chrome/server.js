var WebSocketClient = require("websocket").client,
    util = require("util"),
    EE = require("events").EventEmitter,
    request = require("request"),
    chalk = require("chalk"),
    exec = require("child_process").exec;

// `Commander` class is message handler that talks to debug service exposed by Chrome
var Commander = function(conn) {
  EE.call(this);
  this.connection = conn;
  this.sendCommands = [];
  var self = this;
  Object.defineProperty(this, "nextMsgId", {
    get: function() {
      return self.sendCommands.length;
    },
    enumerable: true,
    configurable: false
  });
  conn.on("message", this.onMessage.bind(this));
};
util.inherits(Commander, EE);

// Send message using websocket connection
Commander.prototype.send = function(method, params, callback) {
  this.sendCommands.push([method, params, callback]);
  var msg = JSON.stringify({
    id: this.nextMsgId,
    method: method,
    params: params
  });
  console.log(msg);
  this.connection.send(msg);
};

//handler for receiving a message
Commander.prototype.onMessage = function(msg) {
  var command, data;
  if(msg.type === "utf8") {
    data = JSON.parse(msg.utf8Data);
    if(data.id) {//it's method request/response invocation
      command = this.sendCommands[data.id-1];
      if(command) {
        if(command.callback) {
          command.callback(data.params);
        }
      } else {
        console.warn("unmatched message id %s", data.id);
      }
    } else {//notifications
      this.emit(data.method, data.params);
    }
  } else {
    console.warn("message of unknown encoding");
  }
};

//find tab info
request("http://localhost:9222/json", function(e, res, data) {
  data = JSON.parse(data);
  var url = data[0].webSocketDebuggerUrl;
  if(!url) {
    throw new Error("no url");
  }
  var client = new WebSocketClient();

  //once it's connect, start our actions
  client.on("connect", function(conn) {
    console.log("client connceted");
    var commander = new Commander(conn);

    //Shoud enable this freatures
    commander.send("Network.enable",{});
    commander.send("Page.enable",{});

    //Listen to wanted notifications
    commander.on("Network.requestWillBeSent", function(data) {
      console.log("[%s] %s %s: %s", chalk.green(data.timestamp), chalk.blue("WillSend"), data.requestId, data.request.url);
    });
    commander.on("Network.loadingFailed", function(data) {
      console.log("[%s] %s %s", chalk.green(data.timestamp), chalk.red("LoadFail"), data.requestId);
    });
    commander.on("Network.loadingFinished", function(data) {
      console.log("[%s] %s %s", chalk.green(data.timestamp), chalk.magenta("LoadDone"), data.requestId);
    });
    commander.on("Network.responseReceived", function(data) {
      console.log("[%s] %s %s: %s Status %s %s", chalk.cyan(data.timestamp), chalk.red("RespRecv"), data.requestId, data.type, data.response.status, data.response.headers["Content-Length"]);
    });
    commander.on("Network.requestServedFromCache", function(data) {
      console.log("%s %s", chalk.gray(data.timestamp), chalk.red("RespCache"), data.requestId);
    });
    commander.on("Page.domContentEventFired", function() {
      console.log(chalk.bgGreen("OnDOMContentLoad\t\t\t\t\t\t\t\t"));
    });

    commander.on("Page.loadEventFired", function() {
      console.log(chalk.bgCyan("OnLoad\t\t\t\t\t\t\t\t"));
    });

    //Navigate to target page
    commander.send("Page.navigate", {url: "http://www.taobao.com"});

  });

  client.connect(url);

});

