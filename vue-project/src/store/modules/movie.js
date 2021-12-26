import axios from 'axios'
export const movie = {
    namespaced : true,
    state : () =>({
        movieInfo : ['a'],
    }),
    getters : {
        getMovieInfo : (state) => { return state.movieInfo}
    },
    mutations : {
        setMovieInfo : (state,value) => state.movieInfo = value
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
                console.log(res.data)
                commit('setMovieInfo',res.data)
            })
        }
    }
}