import useSWR from "swr";
import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
  useReducer,
  memo,
} from "react";
import FilmOverview from "./FilmOverview";
import { APIMovieContext } from "pages/movie/[id]";
import reducer, { initState } from "./reducer/reducer";
import { setCreditsMovie } from "./reducer/action";
import MovieCreditsProps from "interface/MovieCreditsProps";
import CastList from "./CastList";

const FetchData = (shouldFetch: boolean, dataAPI: string) => {
  const { data, error } = useSWR(shouldFetch ? dataAPI : null, fetch);
  if (error) {
    alert("Fetch defail error...");
  }
  return data;
};

export const APIMovieCredits = createContext<MovieCreditsProps>({});

const ContentFilmDetail = () => {
  const [shouldFetch, setShouldFetch] = useState(true);
  const APIMovieData = useContext(APIMovieContext);
  const [state, dispatch] = useReducer(reducer, initState);

  // API Movie credits
  const movieCreditsAPI: string = APIMovieData.id
    ? `https://api.themoviedb.org/3/movie/${APIMovieData.id}/credits?api_key=4b1350e47db61e9adf4a6203687e213b`
    : "";

  // Fetch API
  const movieCreditsResponse = FetchData(shouldFetch, movieCreditsAPI);

  // get API data Function
  const getAPIMovieCredits = useCallback(async () => {
    if (movieCreditsResponse && shouldFetch) {
      const dataMovieCredits = await movieCreditsResponse.clone().json();
      dispatch(setCreditsMovie(dataMovieCredits));
      setShouldFetch(false);
    }
  }, [movieCreditsResponse, shouldFetch]);

  // Call API & dispatch

  useEffect(() => {
    getAPIMovieCredits();
  }, [getAPIMovieCredits]);

  return (
    <APIMovieCredits.Provider value={state.movieCredits}>
      <FilmOverview></FilmOverview>
      <CastList></CastList>
    </APIMovieCredits.Provider>
  );
};

export default memo(ContentFilmDetail);
