// require express
const express = require("express");
// require express layout for view
const expressLayouts = require("express-ejs-layouts");

const app = express();

// EJS

app.use(expressLayouts);
app.set("view engine", "ejs");

// call index routes

app.use("/", require("./routes/index"));

// call users routes

app.use("/users", require("./routes/users"));

// setup port

const PORT = process.env.PORT || 5000;

// listen port
app.listen(PORT, console.log(`server start on port ${PORT}`));
