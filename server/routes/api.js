const express = require('express');
const router = express.Router();
const request = require('request');
// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
const searchAPI = 'https://itunes.apple.com'
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});


router.post('/search', (req, response) => {
  request.post('https://itunes.apple.com/search?term=${'+ req.body.term +'}',{
    json:true
  },
  function(err,res, body){
    response.status(200).json(body);
  })

});

module.exports = router;
