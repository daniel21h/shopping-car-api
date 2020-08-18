const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb://localhost/shoppingcar', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

server.use(express.json());
server.use(routes);

server.listen(3333, () => {
  console.log('Server running on port 3333.')
})