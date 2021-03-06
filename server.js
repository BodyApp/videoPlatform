// Load required modules
var http    = require("http");              // http server core module
var express = require("express");           // web framework external module
var io      = require("socket.io");         // web socket external module
var easyrtc = require("easyrtc");           // EasyRTC external module

// Setup and configure Express http server. Expect a subfolder called "static" to be the web root.
var httpApp = express();
httpApp.use(express.static(__dirname + "/static/"));
// httpApp.use(express.static(__dirname + "/js/"));
httpApp.use('/', express.static(__dirname + '/'));

// Start Express http server
var webServer = http.createServer(httpApp).listen(process.env.PORT || 8000);

// Start Socket.io so it attaches itself to Express server
var socketServer = io.listen(webServer, {"log level":1});

// Start EasyRTC server
var rtc = easyrtc.listen(httpApp, socketServer);

// easyrtc.on("setUsername", setTrainerUsername);

// function setTrainerUsername(usernameSet) {
// 	console.log("trainer username event listened to" + usernameSet)
// 	easyrtc.emit("sendTrainerUsernameToConsumer", usernameSet)
// }

