const express = require('express');
const socket = require('socket.io');
const path = require('path');
const http = require('http');
const app = express();

let server = http.createServer(app)

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//IO= es la comunicacion con el backend
module.exports.io = socket(server)

require('./servers/servers')
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en el puerto ${ port }`);

});