import React, { useContext } from "react";
import { AppContextType } from "./interfaces";
import { allCountries } from "./utils/MockAll";

const AppContext = React.createContext<AppContextType | null>(null);

interface ProviderProps {
  children: JSX.Element;
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <AppContext.Provider value={{ allCountries }}>
      {children}
    </AppContext.Provider>
  );
};

// allCountries[0].name.nativeName.eng?.common

// custom hook

const useGlobalContext = () => {
  return useContext(AppContext) as AppContextType;
};

export { AppProvider, useGlobalContext };
