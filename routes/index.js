// require express

const express = require('express')

// setup router

const router = express.Router();

//set homepage router and welcome message

router.get('/', (req, res) => res.render('welcome'))

//export router

module.exports = router