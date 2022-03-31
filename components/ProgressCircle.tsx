import clsx from "clsx";
import circleCSS from "./progressCircle.module.css";
import { Progress } from "antd";
import FilmCardProps from "interface/FilmCardProps";

const ProgressCircle = ({ voteAverage, circleWidth }: FilmCardProps) => {
  return (
    <div className={clsx(circleCSS.cirlceWrap)}>
      <div className={clsx(circleCSS.outerRing)}>
        <div className={clsx(circleCSS.circleBackground)}>
          <div className={clsx(circleCSS.outlineCircle)}>
            <Progress
              type="circle"
              strokeWidth={5}
              strokeColor={
                (voteAverage as number) * 10 >= 60
                  ? "#21d07a"
                  : (voteAverage as number) * 10 >= 40
                  ? "#cacd2f"
                  : "#dc3545"
              }
              percent={typeof voteAverage === "number" ? voteAverage * 10 : 0}
              width={circleWidth ? circleWidth : 34}
              showInfo={false}
            />
            <div
              className={clsx(circleCSS.progressText)}
              style={{ fontSize: circleWidth ? "24px" : "auto" }}
            >
              {typeof voteAverage === "number" ? voteAverage * 10 : "NR"}
              <sup>%</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCircle;
