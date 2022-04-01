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

  useEffect(() => {
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
    const windowEvent = window;
    windowEvent.addEventListener("scroll", handleHiddenHeader);

    return () => windowEvent.removeEventListener("scroll", handleHiddenHeader);
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
                      <Link href="#" passHref>
                        Popular
                      </Link>
                    </li>
                    <li>
                      <Link href="#" passHref>
                        Now Playing
                      </Link>
                    </li>
                    <li>
                      <Link href="#" passHref>
                        Upcoming
                      </Link>
                    </li>
                    <li>
                      <Link href="#" passHref>
                        Top Rated
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#" passHref>
                    TV Shows
                  </Link>
                  <ul className={clsx(headerCSS.subNavMedia__items)}>
                    <li>
                      <Link href="#" passHref>
                        Popular
                      </Link>
                    </li>
                    <li>
                      <Link href="#" passHref>
                        Airing Today
                      </Link>
                    </li>
                    <li>
                      <Link href="#" passHref>
                        On TV
                      </Link>
                    </li>
                    <li>
                      <Link href="#" passHref>
                        Top Rated
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#" passHref>
                    People
                  </Link>
                  <ul className={clsx(headerCSS.subNavMedia__items)}>
                    <li>
                      <Link href="#" passHref>
                        Popular People
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#" passHref>
                    More
                  </Link>
                  <ul className={clsx(headerCSS.subNavMedia__items)}>
                    <li>
                      <Link href="#" passHref>
                        Discussions
                      </Link>
                    </li>
                    <li>
                      <Link href="#" passHref>
                        Leaderboard
                      </Link>
                    </li>
                    <li>
                      <Link href="#" passHref>
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link href="#" passHref>
                        API
                      </Link>
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
                  <Link href="#" passHref>
                    <div className={clsx(headerCSS.changeLanguage)}>vi</div>
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Đăng nhập
                  </Link>
                </li>
                <li>
                  <Link href="#" passHref>
                    Tham gia TMDB
                  </Link>
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
