import axios from 'axios'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
dayjs.extend(weekday)
export const movie = {
    namespaced : true,
    state : () =>({
        movieInfo : [],
        rankings : [],
        day : ''
    }),
    getters : {
        getMovieInfo : (state) => state.movieInfo,
        getMovieRankings : (state) => state.rankings,
        getDay : (state) => state.day
    },
    mutations : {
        setMovieInfo : (state,value) => state.movieInfo = value,
        setRankings : (state,value) => state.rankings = value,
        setDay : (state,value) => state.day =value
    },
    actions  : {
        searchMovies : ({commit},value) => {
            console.log(value.movieName)
            axios({
                method : 'get',
                params : {
                   movieName : value.movieName,
                   display : value.display
                },
                url : `http://localhost:3000/movie/search`,
            }).then((res)=>{
                commit('setMovieInfo',res.data)
            })
        },
        searchRankings : ({commit},value) => {
            let sunday = dayjs().format('YYYYMMDD') >= dayjs().weekday(0).format('YYYYMMDD') ?
            dayjs().weekday(0).format('YYYYMMDD') : dayjs().weekday(-6).format('YYYYMMDD')
            commit('set',value)
            console.log(sunday)
            axios({
                method : 'get',
                url : 'http://localhost:3000/movie/rankings',
                params : {
                    day : sunday,
                    mode : value.repNationCd,
                }
            }).then((responses)=>{
                console.log(responses.data.weeklyBoxOfficeList);
                commit('setRankings',responses.data.weeklyBoxOfficeList)
                commit('setDay',responses.data.showRange)
            })
        },
    }
}