const express = require('express');
const router = express.Router();
const request = require('request');
// declare axios for making http requests
const axios = require('axios');
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


module.exports = router;
