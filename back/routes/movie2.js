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
        }).then(async(responses)=>{
                console.log('응답합');
                returnData[index].image = responses.data.items[0].image || 'noImage'
                await sleep.sleep(200)
        }).catch(error=>{
            console.log('에러남')
        })
    }
    return returnData
}

router.get('/rankings',async function(req, res, next){
    let day = req.query.day
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${process.env.MOVIE_CLIENT_ID}&targetDt=${20211225}&weekGb=0`
    req.query.mode !== 0 ? url = url : url+=`&repNationCd=${req.query.mode}`
    let data = []
    let range = ''
    await axios({
        method : 'get',
        url : url
    }).then((responses)=>{
        console.log(responses.data)
        data = responses.data.boxOfficeResult || {err : 'error'}
        range = responses.data.boxOfficeResult.showRange
    }).catch((err)=>{
        console.error(err)
    })
    let movieNames = []
    if(data.weeklyBoxOfficeList !== undefined)
    data.weeklyBoxOfficeList.map((item)=>{
        movieNames.push(item.movieNm)
    })
    console.log(range)
    let rankings = await getImage(movieNames,data.weeklyBoxOfficeList)
    res.json({rank : rankings, range : range })
})

module.exports = router;