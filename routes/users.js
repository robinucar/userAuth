// require express

const express = require('express')

// setup router

const router = express.Router();

//set homepage router and welcome message

// Register page
router.get('/register', (req, res) => res.send('Register'))


// login page
router.get('/login', (req, res) => res.send('Login'))

//export router

module.exports = router