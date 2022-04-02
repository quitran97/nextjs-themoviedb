import clsx from "clsx";
import Link from "next/link";
import progressCSS from "./progressTag.module.css";
import ProgressTagProps from "interface/ProgressTagProps";

const colorRandom = [
  "#333",
  "#01c6ac",
  "#ff4918",
  "#1859ff",
  "#0ec619",
  "#c60eb6",
  "#c6af0e",
];

const ProgressTag = ({
  gaugeTop = 2540000,
  gaugeBottom = 9000,
  name,
}: ProgressTagProps) => {
  return (
    <section className={clsx(progressCSS.tagWrapper)}>
      <div className={clsx(progressCSS.tagAvatar)}>
        <Link href="#">
          <a
            style={{
              backgroundColor: `${colorRandom[Math.floor(Math.random() * 7)]}`,
            }}
          >
            <span>{name?.charAt(0)}</span>
          </a>
        </Link>
      </div>
      <div className={clsx(progressCSS.tagStatus)}>
        <h3>
          <Link href="#">
            <a>{name}</a>
          </Link>
        </h3>
        <div className={clsx(progressCSS.tagProgress)}>
          <div className={clsx(progressCSS.gaugeWrap)}>
            <div
              className={clsx(
                progressCSS.gauge,
                progressCSS.backgroundLinearGreen
              )}
              style={{ width: `calc(${(gaugeTop * 100) / 2540000}%)` }}
            ></div>
            <h4>{gaugeTop}</h4>
          </div>
          <div className={clsx(progressCSS.gaugeWrap)}>
            <div
              className={clsx(
                progressCSS.gauge,
                progressCSS.backgroundOrangeRed
              )}
              style={{ width: `calc(${(gaugeBottom * 100) / 9000}%)` }}
            ></div>
            <h4>{gaugeBottom}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressTag;
