import React from "react";
import clsx from "clsx";
import contentCSS from "./Content.module.css";
import SearchContent from "./SearchContent";
import FilmLists from "./FilmLists";
import TrailerContent from "./TrailerContent";
import SignUp from "./SignUp";
import Leaderboard from "./Leaderboard";

const Content = () => {
  return (
    <main id={clsx(contentCSS.mainContent)}>
      <SearchContent></SearchContent>
      <FilmLists hasTVFilm></FilmLists>
      <TrailerContent></TrailerContent>
      <FilmLists
        titleHeading="Trending"
        switchLeft="Today"
        switchRight="This Week"
        backgroundWaveImage
        APIPopularTv="https://api.themoviedb.org/3/trending/movie/day?api_key=4b1350e47db61e9adf4a6203687e213b"
        APIPopularTheater="https://api.themoviedb.org/3/trending/movie/week?api_key=4b1350e47db61e9adf4a6203687e213b"
      ></FilmLists>
      <SignUp></SignUp>
      <Leaderboard></Leaderboard>
    </main>
  );
};

export default Content;
