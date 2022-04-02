import clsx from "clsx";
import trailerCSS from "./trailerContent.module.css";
import SwitchSelector from "./SwitchSelector";

const TrailerContent = () => {
  return (
    <section className={clsx(trailerCSS.trailerWrapper) + " maxWidth1300"}>
      <div className={clsx(trailerCSS.trailerHeader)}>
        <h2 className="textWhite fontWeight6">Latest Trailers</h2>
        <SwitchSelector
          borderColor="rgb(30, 213, 169)"
          backgroundActive="linear-gradient(to right, #c0fecf 0%, #1ed5a9 100%)"
          colorActive="#333"
          colorDisActive="#fff"
        ></SwitchSelector>
      </div>
      <div className={clsx(trailerCSS.trailerLists)}>
        <p className="textWhite">
          {`This panel didn't return any results. Try`}
          <a href="#"> refreshing </a>
          {`it`}
        </p>
      </div>
    </section>
  );
};

export default TrailerContent;
