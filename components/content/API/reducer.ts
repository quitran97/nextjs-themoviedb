import PopularMovie from "interface/PopularMovie";
import Action from "interface/Action";
import { SAVE_API_TV, SAVE_API_THEATER } from "./action";

export interface StatePopularFilm {
  popularMovieTV: PopularMovie[];
  popularMovieTheater: PopularMovie[];
}

const initState: StatePopularFilm = {
  popularMovieTV: [],
  popularMovieTheater: [],
};

const reducer = (state: StatePopularFilm, action: Action) => {
  switch (action.type) {
    case SAVE_API_TV:
      return {
        ...state,
        popularMovieTV: action.payload,
      };
    case SAVE_API_THEATER:
      return {
        ...state,
        popularMovieTheater: action.payload,
      };
    default:
      return state;
  }
};

export { initState };
export { reducer };
