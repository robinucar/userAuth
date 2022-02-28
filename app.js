// require express
const express = require('express');

const app = express();

// setup port

const PORT = process.env.PORT || 5000;

// listen port
app.listen(PORT, console.log(`server start on port ${PORT}`));