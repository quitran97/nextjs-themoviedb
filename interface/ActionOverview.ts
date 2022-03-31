import { MovieReleaseArray } from "interface/MovieReleaseProps";
import TVRatingProps from "interface/TVRatingProps";
import MovieCreditsProps from "interface/MovieCreditsProps";
import MovieVideoProps from "interface/MovieVideoProps";
import TVCreditsProps from "interface/TVCreditsProps";

interface ActionOverview {
  type: string;
  payload:
    | MovieReleaseArray
    | TVRatingProps
    | string
    | MovieCreditsProps
    | TVCreditsProps
    | MovieVideoProps;
}

export default ActionOverview;
