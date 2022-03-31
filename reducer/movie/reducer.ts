import {
  StateFilmDetail,
  FilmTVDetailProps,
  FilmMovieDetailProps,
} from "interface/FilmDetailProps";
import ActionDetailFilm from "interface/ActionDetailFilm";
import { SET_API_TV_DETAIL, SET_API_MOVIE_DETAIL } from "./action";

export const initState: StateFilmDetail = {
  filmTVDetail: {},
  filmMovieDetail: {},
};

const reducer = (
  state: StateFilmDetail = initState,
  action: ActionDetailFilm
) => {
  switch (action.type) {
    case SET_API_TV_DETAIL:
      return {
        ...state,
        filmTVDetail: action.payload as FilmTVDetailProps,
      };
    case SET_API_MOVIE_DETAIL:
      return {
        ...state,
        filmMovieDetail: action.payload as FilmMovieDetailProps,
      };
    default:
      return state;
  }
};

export default reducer;
