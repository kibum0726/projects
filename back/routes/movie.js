var express = require('express');
var router = express.Router();
const axios = require('axios');
const utf8 = require('utf8');
require("dotenv").config();
const sleep = require('../modules/sleep.js')
const request = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.MOVIE_API_KEY,
    language: "ko-KR",
  }
});
router.get('/getData',async function(req, res){
    let urlLink = req.query.apiLink || req.body.apiLink
    let splitLink = (urlLink || '').split('/')
    let mutationName;
    switch (splitLink[splitLink.length - 1]){
        case 'popular' : mutationName = 'setRankings'
            break;
        case 'videos' : id = 'setVideo'
            break;
        default : mutationName = 'setDetails'
    }
    console.log(urlLink + 'qwe')
    request.get(urlLink)
            .then((responses)=>{
                res.json({
                    apiData : responses.data,
                    mutationName : mutationName
                })
            })
            .catch((err)=>{res.json(err)})
})
module.exports = router;