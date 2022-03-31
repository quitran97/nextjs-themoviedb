import clsx from "clsx";
import signUpCSS from "./signUp.module.css";

const SignUp = () => {
  return (
    <section className={clsx(signUpCSS.signUpWrapper) + " maxWidth1300"}>
      <div className={clsx(signUpCSS.signUpSubWrapper) + " textWhite"}>
        <div className={clsx(signUpCSS.signUpHeading)}>
          <h2 className="fontWeight7 textWhite">Join Today</h2>
        </div>
        <div className={clsx(signUpCSS.signUpContent)}>
          <div className={clsx(signUpCSS.contentLeft)}>
            <p>
              Get access to maintain your own{" "}
              <i>custom personal lists, track what you've seen</i> and search
              and filter for <i>what to watch next</i> —regardless if it's in
              theatres, on TV or available on popular streaming services like .
            </p>
            <input
              type="button"
              value="Sign Up"
              className="textWhite fontWeight6"
            />
          </div>
          <ul className={clsx(signUpCSS.contentRight)}>
            <li>Enjoy TMDB ad free</li>
            <li>Maintain a personal watchlist</li>
            <li>
              Filter by your subscribed streaming services and find something to
              watch
            </li>
            <li>Log the movies and TV shows you've seen</li>
            <li>Build custom lists</li>
            <li>Contribute to and improve our database</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
