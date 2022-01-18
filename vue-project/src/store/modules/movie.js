import axios from 'axios'
export const movie = {
    namespaced : true,
    state : () =>({
        rankings : [],
        detail : {},
        video : []
    }),
    getters : {
        getMovieRankings : (state) => state.rankings,
        getDetails : (state) => state.detail,
        getVideo : (sate) => state.video,
    },
    mutations : {
        setRankings : (state,value) => state.rankings = value.results,
        setDetails: (state,value) => state.detail = value,
        setVideo : (sate) => state.video = value,
    },
    actions  : {
        actApi : ({commit},value) => {
            axios({
                method : 'get',
                url : 'http://localhost:3000/movie/getData',
                params : {
                    apiLink : value
                }
            }).then((responses)=>{
                console.log(responses.data.mutationName)
                console.log(responses.data)
                commit(responses.data.mutationName,responses.data.apiData)
            })
        }
    }
}