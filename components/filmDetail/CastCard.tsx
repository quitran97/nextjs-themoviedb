import clsx from "clsx";
import castCardCSS from "./castCard.module.css";
import Image from "next/image";
import Link from "next/link";
import CastCardProps from "interface/CastCardProps";

const myLoader = ({ src }: any) => {
  return `https://image.tmdb.org/t/p/original${src}`;
};

const CastCard = ({ backdropCast, name, role }: CastCardProps) => {
  return (
    <div className={clsx(castCardCSS.castCardWrap)}>
      <Link href="#">
        <a>
          <Image
            loader={backdropCast ? myLoader : undefined}
            src={backdropCast ? backdropCast : "/backgroundNull.svg"}
            width={138}
            height={175}
            alt="cast"
          />
        </a>
      </Link>
      <section>
        <Link href="#">
          <a className="fontWeight7">{name}</a>
        </Link>
        <p>{role}</p>
      </section>
    </div>
  );
};

export default CastCard;
