const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/virtual-workspace', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));


const server = http.createServer(app);

const io = socketIO(server);

io.on('connection', (socket) => {
    console.log('A user has connected.');
  
    socket.on('disconnect', () => {
      console.log('A user has disconnected.');
    });
  
    socket.on('message', (message) => {
      console.log(`Received message: ${message}`);
      io.emit('message', message);
    });
});

const port = process.env.PORT || 8080;

server.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});