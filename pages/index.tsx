import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Header from "../components/header";
import Content from "../components/content";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>The Movie Database (TMDB)</title>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
        <link
          rel="image_src"
          href="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="wrapper">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

export default Home;
