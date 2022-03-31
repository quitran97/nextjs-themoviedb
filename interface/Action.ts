import PopularMovie from "interface/PopularMovie";

interface Action {
  type: string;
  payload: Array<PopularMovie>;
}

export default Action;
