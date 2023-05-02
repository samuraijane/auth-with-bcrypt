const express = require('express');

const server = express();

server.get('/heartbeat', (req, res) => {
  res.json({
    "is": "working"
  });
});

server.listen(8080, () => console.log('The server is listening at PORT 8080'));
