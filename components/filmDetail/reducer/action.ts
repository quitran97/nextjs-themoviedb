import { MovieReleaseArray } from "interface/MovieReleaseProps";
import TVRatingProps from "interface/TVRatingProps";
import TVCreditsProps from "interface/TVCreditsProps";

export const SET_API_MOVIE_RELEASE = "set_api_movie_release";
export const SET_API_TV_RATING = "set_api_tv_rating";
export const SET_TIME_TV = "set_time_tv";
export const SET_TIME_MOVIE = "set_time_movie";
export const SET_CREDITS_MOVIE = "set_credits_movie";
export const SET_CREDITS_TV = "set_credits_tv";
export const SET_VIDEO_MOVIE = "set_video_movie";
export const SET_VIDEO_TV = "set_video_tv";

export const setAPIMovieRelease = (payload: MovieReleaseArray) => {
  return {
    type: SET_API_MOVIE_RELEASE,
    payload,
  };
};

export const setAPITvRating = (payload: TVRatingProps) => {
  return {
    type: SET_API_TV_RATING,
    payload,
  };
};

export const setTimeTv = (payload: string) => {
  return {
    type: SET_TIME_TV,
    payload,
  };
};

export const setTimeMovie = (payload: string) => {
  return {
    type: SET_TIME_MOVIE,
    payload,
  };
};

export const setCreditsMovie = (payload: string) => {
  return {
    type: SET_CREDITS_MOVIE,
    payload,
  };
};

export const setCreditsTv = (payload: TVCreditsProps) => {
  return {
    type: SET_CREDITS_TV,
    payload,
  };
};

export const setVideoMovie = (payload: string) => {
  return {
    type: SET_VIDEO_MOVIE,
    payload,
  };
};

export const setVideoTv = (payload: string) => {
  return {
    type: SET_VIDEO_TV,
    payload,
  };
};
