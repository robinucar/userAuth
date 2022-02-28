// require express

const express = require('express')

// setup router

const router = express.Router();

//set homepage router and welcome message

router.get('/', (req, res) => res.send('Welcome'))

//export router

module.exports = router