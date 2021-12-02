import { createStore } from "vuex";
import {movie} from "./modules/movie.js";
export const store = createStore({
    modules : {
        movie : movie,
    }
})
