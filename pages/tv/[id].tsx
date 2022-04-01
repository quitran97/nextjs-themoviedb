import { useRouter } from "next/router";
import {
  useState,
  useCallback,
  useEffect,
  useReducer,
  createContext,
} from "react";
import Head from "next/head";
import useSWR from "swr";
import Header from "../../components/header";
import Footer from "../../components/footer";
import ContentFilmDetail from "../../components/filmDetail";
import { setAPITvDetail } from "reducer/movie/action";
import reducer, { initState } from "reducer/movie/reducer";
import { FilmTVDetailProps } from "interface/FilmDetailProps";

export const APITvContext = createContext<FilmTVDetailProps>({});

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

  // API TV
  const TVDetailAPI: string = id
    ? `https://api.themoviedb.org/3/tv/${id}?api_key=4b1350e47db61e9adf4a6203687e213b`
    : "";

  // Fetch API
  const TVResponse = FetchDataDetail(shouldFetch, TVDetailAPI);

  const getAPITvDetail = useCallback(async () => {
    if (TVResponse && shouldFetch) {
      const DataTv = await TVResponse.clone().json();
      dispatch(setAPITvDetail(DataTv));
      setShouldFetch(false);
    }
  }, [TVResponse, shouldFetch]);

  // Call API & ditpatch
  useEffect(() => {
    getAPITvDetail();
  }, [getAPITvDetail]);

  return (
    <APITvContext.Provider value={state.filmTVDetail}>
      <Head>
        <title>{state.filmTVDetail.original_name}</title>
      </Head>
      <div className="FilmTVDetaiWrapper">
        <Header></Header>
        {/* <ContentFilmDetail></ContentFilmDetail> */}
        <Footer></Footer>
      </div>
    </APITvContext.Provider>
  );
};

export default FilmTVDetail;
