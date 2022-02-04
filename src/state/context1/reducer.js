import { SET_TITLE } from "./types";

export let reducer = (state, action) => {
  switch (action.type) {
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
      };

    default:
      return { ...state };
  }
};
