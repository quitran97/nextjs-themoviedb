import {
  FilmTVDetailProps,
  FilmMovieDetailProps,
} from "interface/FilmDetailProps";

interface ActionDetailFilm {
  type: string;
  payload: FilmTVDetailProps | FilmMovieDetailProps;
}

export default ActionDetailFilm;
