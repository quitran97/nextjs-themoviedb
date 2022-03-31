interface FilmCardProps {
  id?: number;
  name?: string;
  firstAirDate?: string | Date;
  posterPath?: string;
  voteAverage?: number | string;
  onChange?: boolean;
  circleWidth?: number;
}

export default FilmCardProps;
