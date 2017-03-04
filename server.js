import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import router from './router';
import socket from 'socket.io';
import http from 'http';
import socketStart from './sockets/init';

const app = express();

// litle hacky for now - but if the Papertrail API exists, then we 
// must be on heroku - so set the port differently

const port = 80;

if(process.env.HEROKU_APP) { 
    const port = 80;
}
else {
// still in dev mode 
    const port = 8081;
}


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
