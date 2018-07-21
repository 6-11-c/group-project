const express = require('express');

// Production Only
app.use(express.static(path.join(__dirname, 'client/build')));

// Production Only
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

// Development mode port
const port = process.env.PORT || 5000;
app.listen(port)

module.exports = app;