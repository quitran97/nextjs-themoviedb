import { MovieReleaseArray } from "interface/MovieReleaseProps";
import ActionOverview from "interface/ActionOverview";
import TVRatingProps from "interface/TVRatingProps";
import MovieCreditsProps from "interface/MovieCreditsProps";
import MovieVideoProps from "interface/MovieVideoProps";
import TVCreditsProps from "interface/TVCreditsProps";
import {
  SET_API_MOVIE_RELEASE,
  SET_API_TV_RATING,
  SET_TIME_TV,
  SET_TIME_MOVIE,
  SET_CREDITS_MOVIE,
  SET_VIDEO_MOVIE,
  SET_VIDEO_TV,
  SET_CREDITS_TV,
} from "./action";

interface StateOverviewProps {
  movieRelease: MovieReleaseArray;
  tvRating: TVRatingProps;
  timeTv: string;
  timeMovie: string;
  movieCredits: MovieCreditsProps;
  tvCredits: TVCreditsProps;
  movieVideo: MovieVideoProps;
  tvVideo: MovieVideoProps;
}

export const initState: StateOverviewProps = {
  movieRelease: [],
  tvRating: {},
  timeTv: "",
  timeMovie: "",
  movieCredits: {},
  tvCredits: {},
  movieVideo: {},
  tvVideo: {},
};

const reducer = (
  state: StateOverviewProps = initState,
  action: ActionOverview
) => {
  switch (action.type) {
    case SET_API_MOVIE_RELEASE:
      return {
        ...state,
        movieRelease: action.payload as MovieReleaseArray,
      };
    case SET_API_TV_RATING:
      return {
        ...state,
        tvRating: action.payload as TVRatingProps,
      };

    case SET_TIME_TV:
      return {
        ...state,
        timeTv: action.payload as string,
      };

    case SET_TIME_MOVIE:
      return {
        ...state,
        timeMovie: action.payload as string,
      };

    case SET_CREDITS_MOVIE:
      return {
        ...state,
        movieCredits: action.payload as MovieCreditsProps,
      };

    case SET_CREDITS_TV:
      return {
        ...state,
        tvCredits: action.payload as TVCreditsProps,
      };

    case SET_VIDEO_MOVIE:
      return {
        ...state,
        movieVideo: action.payload as MovieVideoProps,
      };

    case SET_VIDEO_TV:
      return {
        ...state,
        tvVideo: action.payload as MovieVideoProps,
      };

    default:
      return state;
  }
};

export default reducer;
