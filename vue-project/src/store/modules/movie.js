import axios from 'axios'
export const movie = {
    namespaced : true,
    state : () =>({
        rankings : [],
    }),
    getters : {
        getMovieRankings : (state) => state.rankings,
    },
    mutations : {
        setRankings : (state,value) => state.rankings = value
    },
    actions  : {
        searchRankings : ({commit},value) => {
            console.log(value)
            axios({
                method : 'get',
                url : 'http://localhost:3000/movie/rankings',
            }).then((responses)=>{
                console.log(responses.data.results)
                commit('setRankings',responses.data.results)
            })
        },
    }
}