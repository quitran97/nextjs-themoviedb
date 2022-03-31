import clsx from "clsx";
import filmListsCSS from "./filmLists.module.css";
import SwitchSelector from "./SwitchSelector";
import FilmCard from "./FilmCard";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useReducer,
  useLayoutEffect,
} from "react";
import FilmListsProps from "interface/FilmListsProps";
import { reducer, initState } from "./API/reducer";
import useSWR from "swr";
import { saveAPITv, saveAPITheater } from "./API/action";
import PopularMovie from "interface/PopularMovie";

// Fetch Data
const fetchData = (shouldFetch: boolean, APIhref: string) => {
  const { data, error } = useSWR(shouldFetch ? APIhref : null, fetch);

  if (error) {
    alert("Can't fetch API");
  }
  // if (!data) {
  //   console.log("loading...");
  // }
  return data;
};

const FilmLists = ({
  titleHeading = "What's Popular",
  switchLeft = "On TV",
  switchRight = "In Theaters",
  backgroundWaveImage = false,
  APIPopularTv = "https://api.themoviedb.org/3/tv/popular?api_key=4b1350e47db61e9adf4a6203687e213b",
  APIPopularTheater = "https://api.themoviedb.org/3/movie/popular?api_key=4b1350e47db61e9adf4a6203687e213b",
  hasTVFilm = false,
}: FilmListsProps) => {
  const ulScroll = useRef<HTMLUListElement>(null);
  const [showState, setShowState] = useState<boolean>(true);
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);
  const [APIarray, setAPIarray] = useState<PopularMovie[]>([]);
  const [TVFilmActive, setTVFilmActive] = useState(true);
  const [state, dispatch] = useReducer(reducer, initState);

  // CallAPI
  const data1 = fetchData(shouldFetch, APIPopularTv);
  const data2 = fetchData(shouldFetch, APIPopularTheater);

  const getAPI1 = useCallback(async () => {
    if (data1 && shouldFetch) {
      const dataAPI1 = await data1.clone().json();
      dispatch(saveAPITv(dataAPI1.results));
      setShouldFetch(false);
    }
  }, [data1]);

  const getAPI2 = useCallback(async () => {
    if (data2 && shouldFetch) {
      const dataAPI2 = await data2.clone().json();
      dispatch(saveAPITheater(dataAPI2.results));
      setShouldFetch(false);
    }
  }, [data2]);

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

  const handleChange = (isLeftActive: boolean) => {
    if (isLeftActive) {
      setAPIarray(state.popularMovieTV);
      if (hasTVFilm) {
        setTVFilmActive(true);
      }
    } else {
      setAPIarray(state.popularMovieTheater);
      if (hasTVFilm) {
        setTVFilmActive(false);
      }
    }
  };

  useEffect(() => {
    ulScroll.current?.addEventListener("scroll", handleScroll);
    return () => {
      ulScroll.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    getAPI1();
  }, [getAPI1]);

  useEffect(() => {
    getAPI2();
  }, [getAPI2]);

  useEffect(() => {
    if (state.popularMovieTV) {
      setAPIarray(state.popularMovieTV);
    }
  }, [state.popularMovieTV]);

  return (
    <section
      className={
        clsx(filmListsCSS.popularFilmsWrapper, {
          [filmListsCSS.backgroundWaveImage]: backgroundWaveImage,
        }) + " maxWidth1300"
      }
    >
      <div className={clsx(filmListsCSS.selectHeader)}>
        <h2 className="fontWeight6">{titleHeading}</h2>
        <div className={clsx(filmListsCSS.selectorWrap)}>
          <SwitchSelector
            valueName1={switchLeft}
            valueName2={switchRight}
            onChange={handleChange}
          ></SwitchSelector>
        </div>
      </div>
      <div
        className={clsx(filmListsCSS.filmLists, {
          [filmListsCSS.showEffect]: showState,
          [filmListsCSS.hiddenEffect]: !showState,
        })}
      >
        <ul ref={ulScroll} className={clsx(filmListsCSS.showLists)}>
          {APIarray.map((film) => {
            const date = new Date(film.first_air_date || film.release_date);
            let year = new Intl.DateTimeFormat("en", {
              year: "numeric",
            }).format(date);
            let month = new Intl.DateTimeFormat("en", {
              month: "short",
            }).format(date);
            let day = new Intl.DateTimeFormat("en", {
              day: "2-digit",
            }).format(date);
            const renderDate = `${month} ${day}, ${year}`;

            return (
              <li key={film.id}>
                <FilmCard
                  name={film.name || film.title}
                  firstAirDate={renderDate}
                  posterPath={film.poster_path}
                  voteAverage={film.vote_average}
                  id={film.id}
                  onChange={hasTVFilm && TVFilmActive}
                ></FilmCard>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FilmLists;
