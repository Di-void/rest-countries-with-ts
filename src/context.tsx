import React, { useContext, useState, useEffect, useCallback } from "react";
import { debounce } from "lodash";
import { AppContextType, Country, Region } from "./interfaces";
import {
  formatData,
  paramGeneric,
  isSearchError,
  cacheCountries,
  getCachedCountries,
} from "./utils/functions";
import axios from "axios";

const AppContext = React.createContext<AppContextType | null>(null);

// TYPES AND INTERFACES
interface ProviderProps {
  children: JSX.Element;
}

// OTHER FUNCTIONS AND GLOBALS

const DEVALL_URL = "http://localhost:3000/all";
const PRODALL_URL = "https://restcountries.com/v3.1/all";
const SEARCH_BY_NAME = "https://restcountries.com/v3.1/name/";
const SEARCH_BY_REGION = "https://restcountries.com/v3.1/region";
const SEARCH_BY_LIST_OF_CODES = "https://restcountries.com/v3.1/alpha?codes=";

// ? MAIN COMPONENT
const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  // * STATE VALUES
  const [searchQuery, setSearchQuery] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [allCountries, setAllCountries] = useState<Country[] | undefined>();
  const [error, setError] = useState({ msg: "", status: false });
  const [searchError, setSearchError] = useState({ msg: "", status: false });
  const [borderError, setBorderError] = useState({ msg: "", status: false });
  const [singleCountryErr, setSingleCountryErr] = useState({
    msg: "",
    status: false,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [borders, setBorders] = useState<Country[] | undefined>();

  // * FUNCTIONS AND SIDE EFFECTS

  // ? FETCH ALL COUNTRIES
  const fetchAllCountries = async (url: string) => {
    try {
      setIsLoading(true);
      const response = await axios(url);
      const res: paramGeneric = response.data;
      let FRESH_ARR = formatData(res);
      cacheCountries(FRESH_ARR);
      setAllCountries(FRESH_ARR);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError((old) => {
        let newErr = {
          ...old,
          status: true,
          msg: "Something's wrong.. ☹🙁. Try reloading",
        };
        return newErr;
      });
    }
  };

  // ? FETCH COUNTRIES BY REGION
  const filterByRegion = async (val: Region) => {
    setInputVal("");
    setSearchError((oldMsg) => {
      let newMsg = { ...oldMsg, status: false, msg: "" };
      return newMsg;
    });
    if (val === "all") {
      fetchAllCountries(DEVALL_URL);
    } else {
      try {
        setIsLoading(true);
        const response = await axios(`${SEARCH_BY_REGION}/${val}`);
        const res: paramGeneric = response.data;
        let FRESH_ARR = formatData(res, "region");
        setAllCountries(FRESH_ARR);
        setIsLoading(false);
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
    try {
      const response = await axios(`${SEARCH_BY_LIST_OF_CODES}${codes}`);
      const res: paramGeneric = response.data;
      let FRESH_ARR = formatData(res, "borders");
      setBorders(FRESH_ARR);
    } catch (error) {
      console.log(error);
      setBorderError((old) => {
        let newErr = {
          ...old,
          status: true,
          msg: "Unable to load borders..",
        };
        return newErr;
      });
    }
  };

  const handleSearchInputChange = useCallback(
    debounce((val: string) => {
      setSearchQuery(val);
    }, 500),
    []
  );

  // ? SEARCH FOR A COUNTRY
  const searchForCountries = async (query: string) => {
    try {
      setIsLoading(true);
      query = query.replace(/^a-zA-Z/g, "");
      const response = await axios(`${SEARCH_BY_NAME}${query}`);
      const data = response.data;
      const FRESH_ARR = formatData(data, "fullsearch");
      setAllCountries(FRESH_ARR);
      setIsLoading(false);
      setSearchError((oldMsg) => {
        let newMsg = { ...oldMsg, status: false, msg: "" };
        return newMsg;
      });
    } catch (error) {
      if (isSearchError(error)) {
        setSearchError((oldMsg) => {
          let newMsg = {
            ...oldMsg,
            status: true,
            msg: "Uh oh. Country not found..",
          };
          return newMsg;
        });
        setIsLoading(false);
      } else {
        setError((old) => {
          let newErr = {
            ...old,
            status: true,
            msg: "Oops!. An error occured!!. Try reloading..",
          };
          return newErr;
        });
        setIsLoading(false);
      }
    }
  };

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

  useEffect(() => {
    if (searchQuery === "" || inputVal === "") {
      setSearchError((oldMsg) => {
        let newMsg = { ...oldMsg, status: false, msg: "" };
        return newMsg;
      });
      setAllCountries(getCachedCountries);
      return;
    }
    searchForCountries(searchQuery);
  }, [searchQuery]);

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
        setError,
        handleSearchInputChange,
        searchError,
        inputVal,
        setInputVal,
        borderError,
        singleCountryErr,
        setSingleCountryErr,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook

const useGlobalContext = () => {
  return useContext(AppContext) as AppContextType;
};

export { AppProvider, useGlobalContext };
