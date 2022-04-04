import useSWR from "swr";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, {
  useEffect,
  useReducer,
  useContext,
  useState,
  useCallback,
} from "react";
import reducer, { initState } from "./reducer/reducer";
import {
  setAPIMovieRelease,
  setAPITvRating,
  setTimeTv,
  setTimeMovie,
  setVideoMovie,
  setVideoTv,
} from "./reducer/action";
import filmOverviewCSS from "./filmOverview.module.css";
import { APITvContext } from "pages/tv/[id]";
import { APIMovieContext } from "pages/movie/[id]";
import ProgressCircle from "components/ProgressCircle";
import {
  DatabaseFilled,
  HeartFilled,
  FlagFilled,
  StarFilled,
  FullscreenOutlined,
  CaretRightFilled,
  CloseOutlined,
} from "@ant-design/icons";
import { APIMovieCredits } from "./";

const FetchDataRating = (shouldFetch: boolean, dataAPI: string) => {
  const { data, error } = useSWR(shouldFetch ? dataAPI : null, fetch);
  if (error) {
    alert("Fetch defail error...");
  }
  return data;
};

const myLoader = ({ src }: any) => {
  return `https://image.tmdb.org/t/p/original${src}`;
};

const FilmOverview = () => {
  const APITvData = useContext(APITvContext);
  const APIMovieData = useContext(APIMovieContext);
  const MovieCredits = useContext(APIMovieCredits);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [showTrailer, setShowTrailer] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [renderTv, setRenderTv] = useState<string>("");
  const [renderMovie, setRenderMovie] = useState<string>();
  const [state, dispatch] = useReducer(reducer, initState);

  // API TV Rating
  const tvRatingAPI: string = APITvData.id
    ? `https://api.themoviedb.org/3/tv/${APITvData.id}/content_ratings?api_key=4b1350e47db61e9adf4a6203687e213b`
    : "";

  // API Movie Realease Date
  const movieReleaseAPI: string = APIMovieData.id
    ? `https://api.themoviedb.org/3/movie/${APIMovieData.id}/release_dates?api_key=4b1350e47db61e9adf4a6203687e213b`
    : "";

  // API Movie Video
  const movieVideoAPI: string = APIMovieData.id
    ? `https://api.themoviedb.org/3/movie/${APIMovieData.id}/videos?api_key=4b1350e47db61e9adf4a6203687e213b`
    : "";

  // API TV Video
  const tvVideoAPI: string = APITvData.id
    ? `https://api.themoviedb.org/3/tv/${APITvData.id}/videos?api_key=4b1350e47db61e9adf4a6203687e213b`
    : "";

  // Fetch API
  const tVResponse = FetchDataRating(shouldFetch, tvRatingAPI);
  const movieReleaseResponse = FetchDataRating(shouldFetch, movieReleaseAPI);
  const movieVideoResponse = FetchDataRating(shouldFetch, movieVideoAPI);
  const tvVideoResponse = FetchDataRating(shouldFetch, tvVideoAPI);

  // get API data Function
  const getAPITvRating = useCallback(async () => {
    if (tVResponse && shouldFetch) {
      const dataTvRating = await tVResponse.clone().json();
      dispatch(setAPITvRating(dataTvRating));
      setShouldFetch(false);
    }
  }, [tVResponse, shouldFetch]);

  const getAPIMovieRelease = useCallback(async () => {
    if (movieReleaseResponse && shouldFetch) {
      const dataMovieRelease = await movieReleaseResponse.clone().json();
      dispatch(setAPIMovieRelease(dataMovieRelease.results));
      setShouldFetch(false);
    }
  }, [movieReleaseResponse, shouldFetch]);

  const getAPIMovieVideo = useCallback(async () => {
    if (movieVideoResponse && shouldFetch) {
      const dataMovieRelease = await movieVideoResponse.clone().json();
      dispatch(setVideoMovie(await dataMovieRelease));
      setShouldFetch(false);
    }
  }, [movieVideoResponse, shouldFetch]);

  const getAPITvVideo = useCallback(async () => {
    if (tvVideoResponse && shouldFetch) {
      const dataTvRelease = await tvVideoResponse.clone().json();
      dispatch(setVideoTv(await dataTvRelease));
      setShouldFetch(false);
    }
  }, [tvVideoResponse, shouldFetch]);

  // Call API & dispatch

  useEffect(() => {
    getAPITvRating();
  }, [getAPITvRating]);

  useEffect(() => {
    getAPIMovieRelease();
  }, [getAPIMovieRelease]);

  useEffect(() => {
    getAPIMovieVideo();
  }, [getAPIMovieVideo]);

  useEffect(() => {
    getAPITvVideo();
  }, [getAPITvVideo]);

  // Convert time
  useEffect(() => {
    const hour = Math.floor(
      APITvData.episode_run_time?.length
        ? (APITvData?.episode_run_time?.find(
            (number) => !!number === true
          ) as number) / 60
        : 1
    );
    const minute = Math.floor(
      APITvData?.episode_run_time?.length
        ? (APITvData?.episode_run_time?.find(
            (number) => !!number === true
          ) as number) % 60
        : 0
    );

    dispatch(
      setTimeTv(
        hour !== 0 && minute !== 0
          ? hour + "h" + " " + minute + "m"
          : minute !== 0
          ? minute + "m"
          : "Unknown Time"
      )
    );
  }, [APITvData.episode_run_time]);

  useEffect(() => {
    const hour = Math.floor((APIMovieData?.runtime as number) / 60);
    const minute = Math.floor((APIMovieData?.runtime as number) % 60);

    dispatch(
      setTimeMovie(
        hour !== 0 && minute !== 0
          ? hour + "h" + " " + minute + "m"
          : minute !== 0
          ? minute + "m"
          : "Unknown Time"
      )
    );
  }, [APIMovieData.runtime]);

  useEffect(() => {
    const handleShowTrailer = () => setShowTrailer(true);
    const showTrailerTag = document.querySelector(
      `.${filmOverviewCSS.trailerBtn}`
    );
    showTrailerTag?.addEventListener("click", handleShowTrailer);
    return () =>
      showTrailerTag?.removeEventListener("click", handleShowTrailer);
  });

  useEffect(() => {
    const handleHiddenTrailer = () => setShowTrailer(false);
    const stopPropagation = (e: any) => e.stopPropagation();

    const closeVideoBtn = document.querySelector(
      `.${filmOverviewCSS.modalTrailerClose}`
    );

    const modalTrailer = document.querySelector(
      `.${filmOverviewCSS.modalTrailer}`
    );

    const modalTrailerWrap = document.querySelector(
      `.${filmOverviewCSS.modalTrailerWrapper}`
    );

    closeVideoBtn?.addEventListener("click", handleHiddenTrailer);
    modalTrailer?.addEventListener("click", handleHiddenTrailer);
    modalTrailerWrap?.addEventListener("click", stopPropagation);
    return () => {
      closeVideoBtn?.removeEventListener("click", handleHiddenTrailer);
      modalTrailer?.removeEventListener("click", handleHiddenTrailer);
      modalTrailerWrap?.removeEventListener("click", stopPropagation);
    };
  });

  // show & hide Backdrop
  useEffect(() => {
    const handleShowBackdrop = () => setShowBackdrop(true);
    const handleHiddenBackdrop = () => setShowBackdrop(false);
    const handleStopPropagation = (e: any) => e.stopPropagation();
    const backdrop = document.querySelector(
      `.${filmOverviewCSS.filmBackdropOverlay}`
    );

    const modalBackdrop = document.querySelector(
      `.${filmOverviewCSS.backdropExpand}`
    );

    const backdropExpand = document.querySelector(
      `.${filmOverviewCSS.backdropExpandWrap} > span:first-child`
    );

    const closeExpand = document.querySelector(
      `.${filmOverviewCSS.backdropExpandWrap} > span:last-child`
    );

    backdrop?.addEventListener("click", handleShowBackdrop);
    modalBackdrop?.addEventListener("click", handleHiddenBackdrop);
    backdropExpand?.addEventListener("click", handleStopPropagation);
    closeExpand?.addEventListener("click", handleHiddenBackdrop);

    return () => {
      backdrop?.removeEventListener("click", handleShowBackdrop);
      modalBackdrop?.removeEventListener("click", handleHiddenBackdrop);
      closeExpand?.removeEventListener("click", handleHiddenBackdrop);
      backdropExpand?.removeEventListener("click", handleStopPropagation);
    };
  }, []);

  useEffect(() => {
    setRenderTv(
      `https://www.youtube.com/embed/${
        state.tvVideo.results?.find((prop) => prop.type === "Trailer")?.key
      }`
    );

    setRenderMovie(
      `https://www.youtube.com/embed/${
        state.movieVideo.results?.find((prop) => prop.type === "Trailer")?.key
      }`
    );
  }, [state.tvVideo, state.movieVideo]);

  // state.movieVideo.id || state.tvVideo.id
  //   ? state.movieVideo.id
  //     ? `https://www.youtube.com/embed/${
  //         state.movieVideo.results?.find((prop) => {
  //           if (prop.type === "Trailer") {
  //             return prop.type === "Trailer";
  //           }
  //         })?.key
  //       }`
  //     : `https://www.youtube.com/embed/${
  //         state.tvVideo.results?.find((prop) => prop.type === "Trailer")?.key
  //       }`
  //   : "";

  return (
    <React.Fragment>
      <div
        className={clsx(filmOverviewCSS.filmOverviewWrap)}
        style={{
          backgroundImage:
            APITvData.backdrop_path || APIMovieData.backdrop_path
              ? APITvData.backdrop_path
                ? `url(https://www.themoviedb.org/t/p/original${APITvData.backdrop_path})`
                : `url(https://www.themoviedb.org/t/p/original${APIMovieData.backdrop_path})`
              : "",
        }}
      >
        <section className={clsx(filmOverviewCSS.filmOverviewSubWrap)}>
          <div className={clsx(filmOverviewCSS.filmBackdrop)}>
            <div className={clsx(filmOverviewCSS.filmBackdropOverlay)}>
              <Image
                loader={
                  APITvData.poster_path || APIMovieData.poster_path
                    ? myLoader
                    : undefined
                }
                className="borderRadius8"
                src={
                  APITvData.poster_path || APIMovieData.poster_path
                    ? APITvData.poster_path
                      ? `${APITvData.poster_path}`
                      : `${APIMovieData.poster_path}`
                    : "/backgroundNull.svg"
                }
                width={300}
                height={450}
                alt="Poster"
              />
              <div
                className={
                  clsx(filmOverviewCSS.filmBackdropZoom) + " textWhite"
                }
              >
                <FullscreenOutlined /> <span>Expand</span>
              </div>
            </div>
          </div>
          <div
            className={clsx(filmOverviewCSS.filmTitleWrapper) + " textWhite"}
          >
            <div className={clsx(filmOverviewCSS.filmTitle)}>
              <h2 className="textWhite .fontWeight7">
                <Link
                  href={
                    APITvData.homepage || APIMovieData.homepage
                      ? APITvData.homepage
                        ? (APITvData.homepage as string | any)
                        : (APIMovieData.homepage as string | any)
                      : "#"
                  }
                >
                  <a className="textWhite fontWeight7" target="_blank">
                    {APITvData || APIMovieData
                      ? APITvData.original_name
                        ? APITvData.original_name
                        : APIMovieData.original_title
                      : "Unknown Name"}
                  </a>
                </Link>
                <span className="fontWeight4">
                  {" "}
                  (
                  {APITvData || APIMovieData
                    ? APITvData.first_air_date
                      ? new Date(APITvData.first_air_date).getFullYear()
                      : new Date(APIMovieData.release_date).getFullYear()
                    : ""}
                  )
                </span>
              </h2>
              <div>
                {(state.tvRating.results?.[0] ||
                  state.movieRelease.length > 0) && (
                  <span className={clsx(filmOverviewCSS.certification)}>
                    {state.movieRelease || state.tvRating.results
                      ? state.tvRating.results
                        ? state.tvRating.results.find(
                            (prop) =>
                              prop.iso_3166_1 === "US" || prop.iso_3166_1
                          )?.rating
                        : state.movieRelease
                        ? state.movieRelease
                            .find((prop) => prop.iso_3166_1 === "US")
                            ?.release_dates?.find(
                              (prop) => prop.certification !== ""
                            )?.certification
                        : ""
                      : ""}
                  </span>
                )}
                {state.movieRelease[0] && (
                  <span className={clsx(filmOverviewCSS.dateRelease)}>
                    {state.movieRelease[0]
                      ? new Date(
                          state.movieRelease
                            .find((prop) => prop.iso_3166_1 === "US")
                            ?.release_dates?.find(
                              (prop) => !!prop.release_date === true
                            )?.release_date as string
                        ).toLocaleDateString()
                      : ""}
                    (
                    {state.movieRelease
                      ? state.movieRelease.find(
                          (prop) => prop.iso_3166_1 === "US"
                        )?.iso_3166_1
                      : ""}
                    )
                  </span>
                )}
                {(APITvData.genres?.[0] || APIMovieData.genres?.[0]) && (
                  <ul className={clsx(filmOverviewCSS.genres) + " textWhite"}>
                    {APITvData || APIMovieData
                      ? APITvData.genres
                        ? APITvData.genres.map((genre) => {
                            return (
                              <li key={genre.id}>
                                <Link href="#">
                                  <a>{genre.name}</a>
                                </Link>
                              </li>
                            );
                          })
                        : APIMovieData.genres?.map((genre) => (
                            <li key={genre.id}>
                              <Link href="#">
                                <a>{genre.name}</a>
                              </Link>
                            </li>
                          ))
                      : ""}
                  </ul>
                )}
                <span className={clsx(filmOverviewCSS.runtime)}>
                  {APITvData || APIMovieData
                    ? APITvData.episode_run_time
                      ? state.timeTv
                      : state.timeMovie
                    : ""}
                </span>
              </div>
            </div>
            <ul className={clsx(filmOverviewCSS.action)}>
              <li className={clsx(filmOverviewCSS.chart)}>
                <ProgressCircle
                  voteAverage={
                    APITvData || APIMovieData
                      ? APITvData.vote_average
                        ? APITvData.vote_average
                        : APIMovieData.vote_average
                      : "NR"
                  }
                  circleWidth={60}
                ></ProgressCircle>
                <div className="fontWeight7">
                  User
                  <br /> Score
                </div>
              </li>
              <li
                data-title="Add to list"
                className={clsx(filmOverviewCSS.tooltipList)}
              >
                <DatabaseFilled />
              </li>
              <li
                data-title="Mark as favorite"
                className={clsx(filmOverviewCSS.tooltipList)}
              >
                <HeartFilled />
              </li>
              <li
                data-title="Add to your watchlist"
                className={clsx(filmOverviewCSS.tooltipList)}
              >
                <FlagFilled />
              </li>
              <li
                data-title="Rate It!"
                className={clsx(filmOverviewCSS.tooltipList)}
              >
                <StarFilled />
              </li>
              {(APIMovieData.id ||
                state.tvVideo.results?.find((prop) => !!prop.key === true)
                  ?.key) && (
                <li
                  className={clsx(filmOverviewCSS.trailerBtn) + " fontWeight6"}
                >
                  <CaretRightFilled />
                  Play Trailer
                </li>
              )}
            </ul>
            {APIMovieData.tagline && (
              <div className={clsx(filmOverviewCSS.tagLine)}>
                <i>{APIMovieData.tagline}</i>
              </div>
            )}
            <div className={clsx(filmOverviewCSS.overview)}>
              <h3 className="textWhite fontWeight6">Overview</h3>
              <p className="textWhite">
                {APITvData || APIMovieData
                  ? APITvData.overview
                    ? APITvData.overview
                    : APIMovieData.overview
                  : ""}
              </p>
            </div>
            <ul className={clsx(filmOverviewCSS.producer)}>
              {APITvData.created_by
                ? APITvData.created_by.map((creator) => (
                    <li key={creator.id}>
                      <Link href="#">
                        <a>
                          <p className="fontWeight7 fontS16 textWhite">
                            {creator.name}
                          </p>
                        </a>
                      </Link>
                      <p>Creator</p>
                    </li>
                  ))
                : ""}
              {MovieCredits.crew
                ? MovieCredits.crew
                    .filter((prop) => prop.job === "Characters")
                    .map((prop) => (
                      <li key={prop.id}>
                        <Link href="#">
                          <a>
                            <p className="fontWeight7 fontS16 textWhite">
                              {prop.name}
                            </p>
                          </a>
                        </Link>
                        <p>{prop.job}</p>
                      </li>
                    ))
                : ""}
              {MovieCredits.crew
                ? MovieCredits.crew
                    .filter((prop) => prop.job === "Director")
                    .map((prop) => (
                      <li key={prop.id}>
                        <Link href="#">
                          <a>
                            <p className="fontWeight7 fontS16 textWhite">
                              {prop.name}
                            </p>
                          </a>
                        </Link>
                        <p>{prop.job}</p>
                      </li>
                    ))
                : ""}
              {MovieCredits.crew
                ? MovieCredits.crew
                    .filter((prop) => prop.job === "Writer")
                    .map((prop) => (
                      <li key={prop.id}>
                        <Link href="#">
                          <a>
                            <p className="fontWeight7 fontS16 textWhite">
                              {prop.name}
                            </p>
                          </a>
                        </Link>
                        <p>{prop.job}</p>
                      </li>
                    ))
                : ""}
            </ul>
          </div>
        </section>
      </div>
      {showTrailer && (
        <div
          className={clsx(filmOverviewCSS.modalTrailer, {
            [filmOverviewCSS.showModalEffect]: showTrailer,
          })}
        >
          <section className={clsx(filmOverviewCSS.modalTrailerWrapper)}>
            <div className={clsx(filmOverviewCSS.modalTitle) + " textWhite"}>
              <h2 className="textWhite fontWeight4">Play Trailer</h2>
              <CloseOutlined
                className={clsx(filmOverviewCSS.modalTrailerClose)}
              />
            </div>
            <iframe
              className={clsx(filmOverviewCSS.modalTrailerVideo)}
              width="100%"
              height="564px"
              src={renderTv ? renderTv : renderMovie ? renderMovie : ""}
            ></iframe>
          </section>
        </div>
      )}
      <div
        className={clsx(filmOverviewCSS.backdropExpand, {
          [filmOverviewCSS.showModalEffect]: showBackdrop,
        })}
      >
        <div className={clsx(filmOverviewCSS.backdropExpandWrap)}>
          <Image
            loader={
              APITvData.poster_path || APIMovieData.poster_path
                ? myLoader
                : undefined
            }
            className="borderRadius8"
            src={
              APITvData.poster_path || APIMovieData.poster_path
                ? APITvData.poster_path
                  ? `${APITvData.poster_path}`
                  : `${APIMovieData.poster_path}`
                : "/backgroundNull.svg"
            }
            width={400}
            height={600}
            alt="Poster"
          />
          <CloseOutlined
            className={clsx(filmOverviewCSS.modalTrailerClose) + " textWhite"}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default FilmOverview;
