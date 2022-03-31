interface TVRatingProps {
  results?: [
    {
      iso_3166_1?: string;
      rating?: string;
    },
    {
      iso_3166_1?: string;
      rating?: string;
    }
  ];
  id?: number;
}

export default TVRatingProps;
