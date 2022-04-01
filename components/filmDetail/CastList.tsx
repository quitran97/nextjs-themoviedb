import { APITvContext } from "pages/tv/[id]";
import {
  useContext,
  useState,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import CastCard from "./CastCard";
import { APIMovieCredits } from "./";
import useSWR from "swr";
import clsx from "clsx";
import reducer, { initState } from "./reducer/reducer";
import { setCreditsTv } from "./reducer/action";
import castListCSS from "./castList.module.css";

const FetchDataRating = (shouldFetch: boolean, dataAPI: string) => {
  const { data, error } = useSWR(shouldFetch ? dataAPI : null, fetch);
  if (error) {
    alert("Fetch defail error...");
  }
  return data;
};

const CastList = () => {
  const APITvData = useContext(APITvContext);
  const APIMovieCast = useContext(APIMovieCredits);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [showState, setShowState] = useState(true);
  const [state, dispatch] = useReducer(reducer, initState);

  // API TV Cast
  const tvCastAPI: string = APITvData.id
    ? `https://api.themoviedb.org/3/tv/${APITvData.id}/credits?api_key=4b1350e47db61e9adf4a6203687e213b`
    : "";

  //  Fetch TV Cast
  const tvCastResponse = FetchDataRating(shouldFetch, tvCastAPI);

  //  Function getAPI
  const getAPITvCredits = useCallback(async () => {
    if (tvCastResponse && shouldFetch) {
      const dataTvCredits = await tvCastResponse.clone().json();
      dispatch(setCreditsTv(dataTvCredits));
      setShouldFetch(false);
    }
  }, [tvCastResponse, shouldFetch]);

  // Call API & dispatch

  useEffect(() => {
    getAPITvCredits();
  }, [getAPITvCredits]);

  //   Scroll-X effect

  useEffect(() => {
    const handleScroll = (e: any) => {
      // console.log(e.target.scrollLeft);
      if (e.target.scrollLeft > 50) {
        // setHiddenState(true);
        setShowState(false);
      } else {
        // setHiddenState(false);
        setShowState(true);
      }
    };

    const ulList = document.querySelector(`.${castListCSS.listCast}`);

    ulList?.addEventListener("scroll", handleScroll);

    return () => {
      ulList?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={clsx(castListCSS.castListWrap)}>
      <h3 className="fontWeight6">Series Cast</h3>
      <div
        className={clsx(castListCSS.listCastContainer, {
          [castListCSS.showEffect]: showState,
          [castListCSS.hiddenEffect]: !showState,
        })}
      >
        <ul className={clsx(castListCSS.listCast)}>
          {state.tvCredits.cast || APIMovieCast.cast
            ? state.tvCredits.cast
              ? state.tvCredits.cast?.map((prop) => (
                  <li key={prop.id}>
                    <CastCard
                      backdropCast={prop.profile_path}
                      name={prop.name}
                      role={prop.character}
                    />
                  </li>
                ))
              : APIMovieCast.cast?.map((prop) => (
                  <li key={prop.id}>
                    <CastCard
                      backdropCast={prop.profile_path}
                      name={prop.name}
                      role={prop.character}
                    />
                  </li>
                ))
            : ""}
        </ul>
      </div>
    </section>
  );
};

export default CastList;
