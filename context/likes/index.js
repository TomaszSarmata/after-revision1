import { useState, createContext, useContext } from "react";

const INITIAL_STATE = {
  like: 0,
  handleLike: () => {},
};

export const LikesContext = createContext(INITIAL_STATE);

export default function LikesProvider({ children }) {
  const [like, setLike] = useState(INITIAL_STATE.like);

  const handleLike = () => {
    let newLike = like + 1;
    setLike(newLike);
  };

  const value = {
    like,
    handleLike,
  };
  return (
    <LikesContext.Provider value={value}>{children}</LikesContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikesContext);

  return context;
}
