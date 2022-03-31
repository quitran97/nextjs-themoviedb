import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import OptionIcon from "./image/optionIcon.svg";
import cardCSS from "./filmCard.module.css";
import FilmCardProps from "interface/FilmCardProps";
import ProgressCircle from "components/ProgressCircle";

const FilmCard = ({
  name,
  firstAirDate,
  posterPath,
  voteAverage = "NR",
  id,
  onChange,
}: FilmCardProps) => {
  const myLoader = ({ src }: any) => {
    return `https://image.tmdb.org/t/p/original${src}`;
  };

  return (
    <div className={clsx(cardCSS.cardWrapper)}>
      <div className={clsx(cardCSS.imageCard)}>
        <div className={clsx(cardCSS.imageFilm)}>
          <Link href={id && onChange === true ? `/tv/${id}` : `/movie/${id}`}>
            <a>
              <Image
                loader={posterPath ? myLoader : undefined}
                className="borderRadius8"
                src={posterPath || "/backgroundNull.svg"}
                width={150}
                height={225}
                alt={name}
              />
            </a>
          </Link>
        </div>
        <div className={clsx(cardCSS.optionCard)}>
          <OptionIcon />
        </div>
      </div>
      <div className={clsx(cardCSS.titleCard)}>
        <ProgressCircle voteAverage={voteAverage}></ProgressCircle>
        <div className={clsx(cardCSS.titleText)}>
          <Link href={id && onChange ? `/tv/${id}` : `/movie/${id}`}>
            <a>
              <h2>{name}</h2>
            </a>
          </Link>
          <p>{firstAirDate}</p>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
