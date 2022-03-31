interface ReleaseDateInfo {
  certification?: string;
  iso_639_1?: string;
  note?: string;
  release_date?: string;
  type?: number;
}

export type MovieReleaseResult = {
  iso_3166_1?: string;
  release_dates?: ReleaseDateInfo[];
};

export type MovieReleaseArray = MovieReleaseResult[];

interface MovieReleaseProps {
  id?: number;
  result?: MovieReleaseResult[];
}

export default MovieReleaseProps;
