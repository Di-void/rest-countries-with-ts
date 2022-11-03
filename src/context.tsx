import React, { useContext, useState, useEffect } from "react";
import useSWR from "swr";
import { AppContextType, Country, Region } from "./interfaces";
// import { mockAll } from "./utils/MockAll";
import { formatData, paramGeneric } from "./utils/functions";
import axios from "axios";

const AppContext = React.createContext<AppContextType | null>(null);

// TYPES AND INTERFACES
interface ProviderProps {
  children: JSX.Element;
}

// OTHER FUNCTIONS AND GLOBALS

const DEVALL_URL = "http://localhost:3000/all";
const PRODALL_URL = "https://restcountries.com/v3.1/all";
const SEARCH_BY_NAME = "https://restcountries.com/v3.1/name/{name}";
const SEARCH_BY_FULL_NAME =
  "https://restcountries.com/v3.1/name/{name}?fullText=true";
const SEARCH_BY_REGION = "https://restcountries.com/v3.1/region";
const SEARCH_BY_LIST_OF_CODES = "https://restcountries.com/v3.1/alpha?codes=";

// ? MAIN COMPONENT
const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  // * STATE VALUES
  const [searchQuery, setSearchQuery] = useState("");
  const [allCountries, setAllCountries] = useState<Country[] | undefined>();
  const [error, setError] = useState({ msg: "", status: false });
  const [isLoading, setIsLoading] = useState(true);
  const [borders, setBorders] = useState<Country[] | undefined>();
  const [stringedBorders, setStringedBorders] = useState<string | undefined>();
  const [borderLoading, setBorderLoading] = useState(false);
  // * FUNCTIONS AND SIDE EFFECTS
  // REQUESTS TO BE MADE
  /*
  - on initial load we query the all endpoint
  - on change of region we query the region endpoint with the region passed to the url enpoint
  - on search we query the name/fullName endpoint
  - on click of each country card, we land on the single country page and determine if there is a borders array existing on it's object.
  - If there is, we extract the values from it an query the list of codes enpoint
*/

  // ? FETCH ALL COUNTRIES
  const fetchAllCountries = async (url: string) => {
    try {
      setIsLoading(true);
      const response = await axios(url);
      const res: paramGeneric = response.data;
      let FRESH_ARR = formatData(res);
      setAllCountries(FRESH_ARR);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError((old) => {
        let newErr = {
          ...old,
          status: true,
          msg: "Something's wrong.. ☹🙁. Try again later..",
        };
        return newErr;
      });
    }
  };

  // ? FETCH COUNTRIES BY REGION
  const filterByRegion = async (val: Region) => {
    if (val === "all") {
      fetchAllCountries(DEVALL_URL);
    } else {
      try {
        setIsLoading(true);
        const response = await axios(`${SEARCH_BY_REGION}/${val}`);
        const res: paramGeneric = response.data;
        let FRESH_ARR = formatData(res, "region");
        setIsLoading(false);
        setAllCountries(FRESH_ARR);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setError((old) => {
          let newErr = {
            ...old,
            status: true,
            msg: "Oops!. An error occured!!. Try reloading..",
          };
          return newErr;
        });
      }
    }
  };

  // ? FIND BORDER COUNTRIES
  const findBorderCountries = async (codes: string) => {
    // console.log(codes);
    // setBorders(codes);
    try {
      setBorderLoading(true);
      const response = await axios(`${SEARCH_BY_LIST_OF_CODES}${codes}`);
      const res: paramGeneric = response.data;
      let FRESH_ARR = formatData(res, "borders");
      setBorders(FRESH_ARR);
      setBorderLoading(false);
    } catch (error) {
      console.log(error);
      setBorderLoading(false);
      setError((old) => {
        let newErr = {
          ...old,
          status: true,
          msg: "Something's wrong.. ☹🙁. Try again later..",
        };
        return newErr;
      });
    }
  };

  // ? SEARCH FOR A COUNTRY
  const searchForCountries = () => {};

  // SAVE SELECTED OPTION TO LOCAL STORAGE
  const saveOptToLocalStorage = (opt: Region) => {
    localStorage.setItem("regions-select", JSON.stringify(opt));
  };

  // GET SELECTED OPTION FROM LOCAL STORAGE
  const getOptFromLocalStorage = () => {
    const localOpt: Region = localStorage.getItem("regions-select")
      ? JSON.parse(localStorage.getItem("regions-select")!)
      : "all";
    return localOpt;
  };

  useEffect(() => {
    fetchAllCountries(DEVALL_URL);
    saveOptToLocalStorage("all");
  }, []);
  // ! RETs...
  return (
    <AppContext.Provider
      value={{
        allCountries,
        isLoading,
        error,
        filterByRegion,
        saveOptToLocalStorage,
        getOptFromLocalStorage,
        findBorderCountries,
        borders,
      }}
    >
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
