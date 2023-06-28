const path = require('path')
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const nickName = req.cookies['nickname'];

    if (nickName) {
        res.redirect('/room')
    } else {
        res.sendFile(path.resolve('./', 'public', 'login.html'))
    }
});

router.post('/', (req, res) => {
    const nickName = req.cookies['nickname'];

    if (!nickName) {
        let nickname = req.body.nickname || 'unknown'
        res.cookie('nickname', nickname)
        res.redirect('/room')
    }
});

module.exports = router;