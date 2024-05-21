import React, { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";

export const Context = createContext();

export const StateProvider = ({ children }) => {
  const reducerAccess = useReducer(reducer, initialState);

  return <Context.Provider value={reducerAccess}>{children}</Context.Provider>;
};

export const useStateValue = () => useContext(Context);
