import {
  FilmTVDetailProps,
  FilmMovieDetailProps,
} from "interface/FilmDetailProps";

export const SET_API_TV_DETAIL = "set_api_tv_detail";
export const SET_API_MOVIE_DETAIL = "set_api_movie_detail";

export const setAPITvDetail = (payload: FilmTVDetailProps) => {
  return {
    type: SET_API_TV_DETAIL,
    payload,
  };
};

export const setAPIMovieDetail = (payload: FilmMovieDetailProps) => {
  return {
    type: SET_API_MOVIE_DETAIL,
    payload,
  };
};
