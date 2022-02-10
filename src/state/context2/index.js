import {  useContext, useReducer } from "react";
import { createContext } from "react";
import { reducer } from "./reducer";
import { setContent } from "./action";

const ContextTwo = createContext();

export let useContextTwo = () => useContext(ContextTwo);

const initialState = {
  content: "Page Content",
};

export let ContextTwoProvider = ({children}) => {
  let [state, dispatch] = useReducer(reducer, initialState);

  let setContentDispatch = (content) => {
    setContent(dispatch, content);
  };

  return (
    <ContextTwo.Provider value={{ state, setContentDispatch }}>
      {children}
    </ContextTwo.Provider>
  );
};
