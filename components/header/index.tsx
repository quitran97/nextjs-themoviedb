import { useState, useRef, useEffect } from "react";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import headerCSS from "./header.module.css";
import TMDBlogo from "./image/TMDB-logo.svg";
import WhitePlusLogo from "./image/plusWhite.svg";
import SearchIcon from "./image/searchIcon.svg";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);
  const [scroll, setScroll] = useState<number>(0);
  // const headerItem = useRef<HTMLElement | null>(null);

  const handleHiddenHeader = () => {
    // console.log(`${window.scrollY} &&& ${scroll}`);
    if (typeof window !== "undefined") {
      if (window.scrollY < scroll) {
        setShow(false); //Hide the header when scroll down
      } else {
        setShow(true); // Show the header when scroll up
      }

      setScroll(window.scrollY); // set last scroll after setShow
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleHiddenHeader);

    return () => window.removeEventListener("scroll", handleHiddenHeader);
  }, [scroll]);

  return (
    <React.Fragment>
      <header
        id={clsx(headerCSS.header)}
        className={clsx({ [headerCSS.hidden]: show })}
      >
        <div className={clsx(headerCSS.contentHeader)}>
          <div className={clsx(headerCSS.subMedia)}>
            <div className={clsx(headerCSS.subNavMedia)}>
              {/*Menu Sub Nav left */}
              <Link href="/">
                <a className={clsx(headerCSS.headerLogo)}>
                  <TMDBlogo />
                  {/* // src={TMDBlogo}
                  // alt="TMDB-logo"
                  // width={154}
                  // height={28}
                  /> */}
                </a>
              </Link>
              <ul>
                <li>
                  <Link href="#">Movies</Link>
                  <ul className={clsx(headerCSS.subNavMedia__items)}>
                    <li>
                      <Link href="#">Popular</Link>
                    </li>
                    <li>
                      <Link href="#">Now Playing</Link>
                    </li>
                    <li>
                      <Link href="#">Upcoming</Link>
                    </li>
                    <li>
                      <Link href="#">Top Rated</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">TV Shows</Link>
                  <ul className={clsx(headerCSS.subNavMedia__items)}>
                    <li>
                      <Link href="#">Popular</Link>
                    </li>
                    <li>
                      <Link href="#">Airing Today</Link>
                    </li>
                    <li>
                      <Link href="#">On TV</Link>
                    </li>
                    <li>
                      <Link href="#">Top Rated</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">People</Link>
                  <ul className={clsx(headerCSS.subNavMedia__items)}>
                    <li>
                      <Link href="#">Popular People</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">More</Link>
                  <ul className={clsx(headerCSS.subNavMedia__items)}>
                    <li>
                      <Link href="#">Discussions</Link>
                    </li>
                    <li>
                      <Link href="#">Leaderboard</Link>
                    </li>
                    <li>
                      <Link href="#">Support</Link>
                    </li>
                    <li>
                      <Link href="#">API</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className={clsx(headerCSS.subNavExtend)}>
              {" "}
              {/*Menu Sub Nav right */}
              <ul>
                <li>
                  <Link href="#">
                    {/* <Image
                    src={WhitePlusLogo}
                    alt="whitePluslogo"
                    width={22.4}
                    height={22.4}
                  /> */}
                    <a className={clsx(headerCSS.whitePluslogo)}>
                      <WhitePlusLogo />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <div className={clsx(headerCSS.changeLanguage)}>vi</div>
                  </Link>
                </li>
                <li>
                  <Link href="#">Đăng nhập</Link>
                </li>
                <li>
                  <Link href="#">Tham gia TMDB</Link>
                </li>
                <li>
                  <Link href="#">
                    <a className={clsx(headerCSS.searchIcon)}>
                      {/* <Image src={searchIcon} /> */}
                      <SearchIcon />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div className={clsx(headerCSS.content)}></div>
    </React.Fragment>
  );
};

export default Header;
