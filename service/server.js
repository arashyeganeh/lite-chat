const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(httpServer)
const port = process.env.PORT || 80

function initServer() {
    httpServer.listen(port, () => {
        console.log('listening on 80');
    });
}

exports.initServer = initServer;
exports.app = app;
exports.io = io