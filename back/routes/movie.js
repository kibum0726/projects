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
router.get('/rankings',async function(req, res, next){
    request.get("movie/popular")
        .then((responses)=>{
            res.json(responses.data)})
        .catch((err)=>{res.json(err)})
})
router.get('/details/:id',async function(req,res){
    request.get(`movie/${req.params.id}`)
        .then((responses)=>{
            console.log(responses)
            res.json(responses.data)})
        .catch((err)=>{res.json(err)})
})

module.exports = router;