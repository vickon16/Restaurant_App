import React, { createContext, useContext, useReducer } from "react";

export const Context = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  const reducerAccess = useReducer(reducer, initialState);

  return <Context.Provider value={reducerAccess}>{children}</Context.Provider>;
};

export const useStateValue = () => useContext(Context);
