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
