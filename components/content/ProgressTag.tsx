import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import Avatar from "./image/avatar.jpg";
import progressCSS from "./progressTag.module.css";
import ProgressTagProps from "interface/ProgressTagProps";

const ProgressTag = ({
  gaugeTop = 2540000,
  gaugeBottom = 9000,
}: ProgressTagProps) => {
  return (
    <section className={clsx(progressCSS.tagWrapper)}>
      <div className={clsx(progressCSS.tagAvatar)}>
        <Link href="#">
          <a>
            <Image src={Avatar} width={56} height={56}></Image>
          </a>
        </Link>
      </div>
      <div className={clsx(progressCSS.tagStatus)}>
        <h3>
          <Link href="#">
            <a>talestalker</a>
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
