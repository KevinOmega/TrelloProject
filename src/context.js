import React, { useState } from "react";

const AppContext = React.createContext("");

const AppProvider = ({ children }) => {
  const [NavId, setNavId] = useState(0);
  const [openSubMenu, setOpenSubMenu] = useState(false);
  return (
    <AppContext.Provider
      value={{ NavId, setNavId, openSubMenu, setOpenSubMenu }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppProvider, useGlobalContext };
