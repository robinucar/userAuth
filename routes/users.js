// require express

const express = require('express')

// setup router

const router = express.Router();

//set homepage router and welcome message

// Register page
router.get('/register', (req, res) => res.render('register'))


// login page
router.get('/login', (req, res) => res.render('login'))

//export router

module.exports = router