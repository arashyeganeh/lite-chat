const path = require('path');
const express = require('express');
const serverService = require('./service/server')
const cookieParser = require('cookie-parser');

const roomRoute = require(path.join(__dirname, '/routes/room'));
const loginRoute = require(path.join(__dirname, '/routes/login'));
const logoutRoute = require(path.join(__dirname, '/routes/logout'));

serverService.app.use(express.urlencoded({ extended: false }));
serverService.app.use(cookieParser())
serverService.app.use(express.json());
serverService.app.use(express.static('public'))
serverService.app.use(express.static('dist'))

serverService.app.use('/room', roomRoute);
serverService.app.use('/logout', logoutRoute);
serverService.app.use('*', loginRoute);

serverService.initServer();