const http = require('http');
const app = require('./app');
const path = require('path');

const port = process.env.PORT || 5000;

const server = http.createServer(app);

// Production Only
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

server.listen(port);