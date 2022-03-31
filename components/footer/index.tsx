import clsx from "clsx";
import Link from "next/link";
import footerCSS from "./footer.module.css";
import Logo from "./image/TMDB_logo.svg";

const Footer = () => {
  return (
    <footer id={clsx(footerCSS.footer)}>
      <div className={clsx(footerCSS.footerWrapper) + " textWhite"}>
        <div className={clsx(footerCSS.footerLogo)}>
          <Link href="#">
            <a>
              <Logo></Logo>
            </a>
          </Link>
          <Link href="#">
            <a className={clsx(footerCSS.joinBtn) + " fontWeight7"}>
              Join the Community
            </a>
          </Link>
        </div>
        <div className={clsx(footerCSS.theBasics)}>
          <h3 className="textWhite fontWeight7">THE BASICS</h3>
          <ul>
            <li>
              <Link href="#">
                <a>Giới thiệu về TMDB</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Contact Us</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Support Forums</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>API</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>System Status</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx(footerCSS.involved)}>
          <h3 className="textWhite fontWeight7">Get Involved</h3>
          <ul>
            <li>
              <Link href="#">
                <a>Contribution Bible</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Add New Movie</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Add New TV Show</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx(footerCSS.community)}>
          <h3 className="textWhite fontWeight7">Community</h3>
          <ul>
            <li>
              <Link href="#">
                <a>Guidelines</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Discussions</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Leaderboard</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Twitter</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={clsx(footerCSS.legal)}>
          <h3 className="textWhite fontWeight7">Legal</h3>
          <ul>
            <li>
              <Link href="#">
                <a>Terms of Use</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>API Terms of Use</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Privacy Policy</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
