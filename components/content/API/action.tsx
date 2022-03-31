import PopularMovie from "interface/PopularMovie";

export const SAVE_API_TV = "save_api_tv";
export const SAVE_API_THEATER = "save_api_theater";

export const saveAPITv = (payload: PopularMovie[]) => {
  return {
    type: SAVE_API_TV,
    payload,
  };
};

export const saveAPITheater = (payload: PopularMovie[]) => {
  return {
    type: SAVE_API_THEATER,
    payload,
  };
};
