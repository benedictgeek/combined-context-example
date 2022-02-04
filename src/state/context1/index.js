import { Children, useContext, useReducer } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";
import { setTitle } from "./action";

const ContextOne = createContext();

export let useContextOne = () => useContext(ContextOne);

const initialState = {
  title: "First context",
};

export let ContextOneProvider = () => {
  let [state, dispatch] = useReducer(reducer, initialState);

  let setTitleDispatch = (title) => {
    setTitle(dispatch, title);
  };

  return (
    <ContextOne.Provider value={{ state, setTitleDispatch }}>
      {Children}
    </ContextOne.Provider>
  );
};
