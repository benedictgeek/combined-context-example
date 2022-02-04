import { SET_TITLE } from "./types";

export let setTitle = (dispatch, payload) => {
  dispatch({ type: SET_TITLE, payload: payload });
};
