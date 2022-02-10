import { SET_CONTENT } from "./types";

export let setContent = (dispatch, payload) => {
  dispatch({ type: SET_CONTENT, payload: payload });
};
