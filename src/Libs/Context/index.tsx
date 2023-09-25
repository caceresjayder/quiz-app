import React, { useReducer } from "react";
import Context from "../Store";
import RootReducer from "../Reducers";
import InitialState from "../States";
import { QuizReducerActions } from "../Reducers/QuizReducer";
import { ViewsReducerActions } from "../Reducers/ViewsReducer";
import QuizState from "../States/QuizState";


function AppContext({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(RootReducer, InitialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default AppContext;
