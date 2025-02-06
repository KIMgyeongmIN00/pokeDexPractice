import { createContext } from "react";

export const Context = createContext(null);

export const Provider = ({ childer }) => {
  return <Context.Provider>{childer}</Context.Provider>;
};
