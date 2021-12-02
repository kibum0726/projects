var express = require('express');
var router = express.Router();
const axios = require('axios');
const utf8 = require('utf8');
require("dotenv").config();

router.get('/search', function(req, res, next) {
    let movieName = encodeURI(req.query.movieName.trim());
    let display = req.query.display
    console.log(movieName)
    console.log(display)
    axios({
        method : 'get',
        url : `https://openapi.naver.com/v1/search/movie.json?query=${movieName}&display=${display}`,
        headers : {
            'X-Naver-Client-Id' : process.env.NAVER_CLIENT_ID,
            'X-Naver-Client-Secret' : process.env.NAVER_CLIENT_SECRET,
        }
    }).then((responses)=>{
        console.log(responses.data)
    })
});

module.exports = router;