// require express
const express = require("express");
// require express layout for view
const expressLayouts = require("express-ejs-layouts");
// require mongoose
const mongoose = require('mongoose')

const app = express();

// DB Config

const db = require('./config/keys').MongoURL

// Connect to mongo

mongoose.connect(db, {useNewUrlParser : true})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err))

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
