import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import router from './router';
import socket from 'socket.io';
import http from 'http';
import socketStart from './sockets/init';

const app = express();

var port = process.env.PORT || 8081; // Use the port that Heroku 

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

router(app);
app.listen(port);
console.log('listening on: ' + port);

// Websocket server
const server = require('http').createServer(app);
const io = socket(server);
socketStart(io);
server.listen(3000);
