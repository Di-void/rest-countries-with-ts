import React, { useContext, useState, useEffect } from "react";
import { AppContextType, Country } from "./interfaces";
import { mockAll } from "./utils/MockAll";
import { formatData } from "./utils/functions";
import axios from "axios";

const AppContext = React.createContext<AppContextType | null>(null);

// TYPES AND INTERFACES
interface ProviderProps {
  children: JSX.Element;
}

// OTHER FUNCTIONS AND GLOBALS

const DEVALL_URL = "http://localhost:3000/all";
const PRODALL_URL = "https://restcountries.com/v3.1/all";

// ? MAIN COMPONENT
const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  // * STATE VALUES
  const [allCountries, setAllCountries] = useState<Country[]>(mockAll);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  // * FUNCTIONS AND SIDE EFFECTS

  // REQUESTS TO BE MADE

  /*
  - on initial load we query the all endpoint
  - on change of region we query the region endpoint with the region passed to the route
  - on search we query the name endpoint
  - on click of each country card we find the borders array and query the list of codes enpoint
*/

  const fetchAllCountries = async () => {
    try {
      const response = await axios(DEVALL_URL);
      const res: {}[] = response.data;
      let FRESH_ARR = formatData(res);
      setAllCountries(FRESH_ARR);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // setTimeout(fetchAllCountries, 2000);
    console.log("Hello");
  }, []);

  // ! RETs...
  return (
    <AppContext.Provider value={{ allCountries, isLoading }}>
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
