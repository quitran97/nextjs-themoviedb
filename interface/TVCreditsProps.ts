export interface CastTv {
  adult?: boolean;
  gender?: number;
  id?: number;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | any;
  character?: string;
  credit_id?: string;
  order?: number;
}

export interface CrewTv {
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

interface TVCreditsProps {
  cast?: CastTv[];
  crew?: CrewTv[];
  id?: number;
}

export default TVCreditsProps;
