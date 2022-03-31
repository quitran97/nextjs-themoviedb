import clsx from "clsx";
import searchContentCSS from "./searchContent.module.css";
import contentCSS from "./Content.module.css";

const SearchContent = () => {
  return (
    <section className="maxWidth1300">
      <div
        className={
          clsx(contentCSS.contentWrapper, searchContentCSS.wrapper) +
          " maxWidth1300"
        }
      >
        <div className={clsx(searchContentCSS.wrapperDetail)}>
          <div className={clsx(searchContentCSS.contentTitle) + " textWhite"}>
            <h2 className="fontWeight7 textWhite">Welcome.</h2>
            <h3 className="fontWeight6 textWhite">
              Millions of movies, TV shows and people to discover. Explore now.
            </h3>
          </div>
          <div className={clsx(searchContentCSS.contentSearch)}>
            <form action="">
              <input
                required
                type="text"
                placeholder="Search for a movie, tv show, person......"
                className="borderRadius30"
              />
              <button className="borderRadius30 fontWeight7 textWhite">
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchContent;
