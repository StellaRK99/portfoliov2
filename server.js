const express = require('express')
const app = express()

// Before the other routes
app.use(express.static("build"))

// the other resource routes

// After all other routes
app.get('*', (req, res) => {
  res.sendFile('build/index.html');
});

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`listening on port ${port}`))