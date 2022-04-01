import { useRouter } from "next/router";
import {
  useState,
  useCallback,
  useEffect,
  useReducer,
  createContext,
  useLayoutEffect,
} from "react";
import Head from "next/head";
import useSWR from "swr";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ContentFilmDetail from "../../components/filmDetail";
import { setAPIMovieDetail } from "reducer/movie/action";
import reducer, { initState } from "reducer/movie/reducer";
import { FilmMovieDetailProps } from "interface/FilmDetailProps";

export const APIMovieContext = createContext<FilmMovieDetailProps>({});

const FetchDataDetail = (shouldFetch: boolean, dataAPI: string) => {
  const { data, error } = useSWR(shouldFetch ? dataAPI : null, fetch);
  if (error) {
    alert("Fetch TV defail error...");
  }
  return data;
};

const FilmTVDetail = () => {
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);
  const [state, dispatch] = useReducer(reducer, initState);
  const router = useRouter();
  const id = router.query.id;

  useLayoutEffect(() => {
    if (!router.isFallback) {
      console.log("loading...");
    }
  }, [router.isFallback]);

  // API Movie
  const MovieDetailAPI: string = id
    ? `https://api.themoviedb.org/3/movie/${id}?api_key=4b1350e47db61e9adf4a6203687e213b`
    : "";

  // Fetch API
  const MovieResponse = FetchDataDetail(shouldFetch, MovieDetailAPI);

  const getAPIMovieDetail = useCallback(async () => {
    if (MovieResponse && shouldFetch) {
      const DataMovie = await MovieResponse.clone().json();
      dispatch(setAPIMovieDetail(DataMovie));
      setShouldFetch(false);
    }
  }, [MovieResponse, shouldFetch]);

  // Call API & ditpatch

  useEffect(() => {
    getAPIMovieDetail();
  }, [getAPIMovieDetail]);

  return router.isFallback ? (
    <div>Loading...</div>
  ) : (
    <APIMovieContext.Provider value={state.filmMovieDetail}>
      <Head>
        <title>{state.filmMovieDetail.original_title}</title>
      </Head>
      <div className="FilmMovieDetaiWrapper">
        <Header></Header>
        <ContentFilmDetail></ContentFilmDetail>
        <Footer></Footer>
      </div>
    </APIMovieContext.Provider>
  );
};

export default FilmTVDetail;
