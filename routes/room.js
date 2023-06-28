const path = require('path')
const express = require('express');
const serverService = require('../service/server');
const cookie = require('cookie');
const router = express.Router();

router.get('/', (req, res) => {
    const nickName = req.cookies['nickname'];
    if (nickName) {
        res.sendFile(path.resolve('./', 'public', 'room.html'))
    } else {
        res.redirect('/login')
    }
});

serverService.io.on('connection', (socket) => {
    const nickName = cookie.parse(socket.handshake.headers.cookie).nickname;
    socket.join('chat');
    socket.on('newMessage', (message) => {
        serverService.io.sockets.to('chat').emit("newMessage", { nickName: nickName, message: message, socketId: socket.id });
    })
});

module.exports = router;