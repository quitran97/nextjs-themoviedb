export interface CastProp {
  adult?: boolean;
  gender?: number;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
}

export interface CrewProp {
  adult?: boolean;
  gender?: number;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: any;
  credit_id?: string;
  department?: string;
  job?: string;
}

interface MovieCreditsProps {
  id?: number;
  cast?: CastProp[];
  crew?: CrewProp[];
}

export default MovieCreditsProps;
