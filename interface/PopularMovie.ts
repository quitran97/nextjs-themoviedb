interface PopularMovie {
  backdrop_path?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  vote_average: number;
  vote_count: number;
  adult: false;
  original_title?: string;
  release_date: string;
  title: string;
  video?: boolean;
  media_type?: string;
}

export default PopularMovie;
