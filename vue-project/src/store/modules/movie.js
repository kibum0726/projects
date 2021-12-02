import axios from 'axios'
import utf8 from 'utf8'
export const movie = {
    namespaced : true,
    state : () =>({
        movieInfo : null,
    }),
    getters : {
        getMovieInfo : (state) => state.movieInfo
    },
    mutations : {
        setMovieInfo : (state,value) => state.movieInfo = value
    },
    actions  : {
        searchMovies : ({commit},value) => {
            let movieName = utf8.encode(value.movieName.trim())
            let display = value.display === undefined ? value.display = 10 :
            axios({
                method : 'get',
                url : `https://openapi.naver.com/v1/search/movie.json?query=${movieName}&display=${display}`,
                headers : {
                    'X-Naver-Client-Id' : process.env.VUE_APP_NAVER_CLIENT_ID,
                    'X-Naver-Client-Secret' : process.env.VUE_APP_NAVER_CLIENT_SECRET,
                }
            }).then((responses)=>{
                console.log(responses)
                commit()
            })
        }
    }
}