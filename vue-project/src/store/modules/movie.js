import axios from 'axios'
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
            console.log(value.movieName)
            console.log(value.display)
            axios({
                method : 'get',
                params : {
                   movieName : value.movieName,
                   display : value.display
                },
                url : `http://localhost:3000/movie/search`,
            })
            commit('setMovieInfo','s')
        }
    }
}