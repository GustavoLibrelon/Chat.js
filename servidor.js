const http = require('http');
const express = require('express');
const app = express();

const servidorHttp = http.createServer(app);
const io = require('socket.io')(servidorHttp);

io.addListener('connection', (socket) =>{
    console.log('um usuario conectou');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    } )
})

app.use(express.static('public'));

servidorHttp.listen(1000, );//abrir cmd executar ipconfig pegar o numero de ip que tem no IPv4 e colar o numero apor a virgula conectar os aparelhos no mesmo wifi e assim todos no mesmo wifi vao poder conversar, exemplo 12.13.22.1.:1000
