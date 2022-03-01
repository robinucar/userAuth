// require express

const express = require('express')

// setup router

const router = express.Router();

//set homepage router and welcome message

router.get('/', (req, res) => res.render('welcome'))

// set dashboard router 

router.get('/dashboard', (req, res) => res.render('dashboard'))

//export router

module.exports = router