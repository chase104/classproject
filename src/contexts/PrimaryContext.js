import { createContext, useState } from "react";

export const primaryContext = createContext();

const PrimaryContextProvider = ({ children }) => {
  // put state
  const [people, setPeople] = useState([]);
  const [ships, setShips] = useState([]);

  let stateObject = {
    people,
    setPeople,
    ships,
    setShips,
  };

  return (
    // put state into provider
    <primaryContext.Provider value={stateObject}>
      {children}
    </primaryContext.Provider>
  );
};

export default PrimaryContextProvider;
