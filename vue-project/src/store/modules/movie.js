import axios from 'axios'
export const movie = {
    namespaced : true,
    state : () =>({
        rankings : [],
        detail : {}
    }),
    getters : {
        getMovieRankings : (state) => state.rankings,
        getDetails : (state) => state.detail
    },
    mutations : {
        setRankings : (state,value) => state.rankings = value,
        setDetails: (state,value) => state.detail = value
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
        searchDetails : ({commit},value) => {
            axios({
                method : 'get',
                url : `http://localhost:3000/movie/details/${value}`
            }).then((responses)=>{
                console.log(responses.data)
                commit('setDetails',responses.data)
            })
        }
    }
}