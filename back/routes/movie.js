var express = require('express');
var router = express.Router();
const axios = require('axios');
const utf8 = require('utf8');
require("dotenv").config();
const sleep = require('../modules/sleep.js')

router.get('/search', function(req, res, next) {
    let movieName = encodeURI(req.query.movieName.trim());
    let display = req.query.display
    axios({
        method : 'get',
        url : `https://openapi.naver.com/v1/search/movie.json?query=${movieName}&display=${display}`,
        headers : {
            'X-Naver-Client-Id' : process.env.NAVER_CLIENT_ID,
            'X-Naver-Client-Secret' : process.env.NAVER_CLIENT_SECRET,
        }
    }).then((responses)=>{
       res.json(responses.data.items[0]||{err:'error'})
    })
});

const getImage = async function(movieNames,returnData){
    for(const [index,name] of movieNames.entries()){
        await axios({
            method : 'get',
            url : `https://openapi.naver.com/v1/search/movie.json?query=${encodeURI(name)}&display=1`,
            headers : {
                'X-Naver-Client-Id' : process.env.NAVER_CLIENT_ID,
                'X-Naver-Client-Secret' : process.env.NAVER_CLIENT_SECRET,
            }
            }).then((responses)=>{
               returnData[index].image = responses.data.items[0].image || 'noImage'
            }).catch(error=>{
                console.error(error)
        })
        sleep.sleep(1000)
    }
    console.log(returnData)
}

router.get('/rankings',async function(req, res, next){
    let day = req.query.day
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${process.env.MOVIE_CLIENT_ID}&targetDt=${20211225}&weekGb=0`
    req.query.mode !== 0 ? url = url : url+=`&repNationCd=${req.query.mode}`
    let data = []
    await axios({
        method : 'get',
        url : url
    }).then((responses)=>{
        data = responses.data.boxOfficeResult || {err : 'error'}
    }).catch((err)=>{
        console.error(err)
    })
    let movieNames = []
    if(data.weeklyBoxOfficeList !== undefined)
    data.weeklyBoxOfficeList.map((item)=>{
        movieNames.push(item.movieNm)
    })
    getImage(movieNames,data.weeklyBoxOfficeList)
})

module.exports = router;