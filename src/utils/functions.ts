// * [--------ALL HELPERS AND ABSTRACTIONS MUST BE INCLUDED AND DRAWN OUT OF THIS FILE---------------]

// ? NUMBER TO STRING FUNCTION
import _ from "lodash";
import { Country, currencies, langs } from "../interfaces";

// * ALL FUNCTIONS NAMESPACE

type obj = {
  [key: string]: any;
};
export type route = "all" | "region" | "borders" | "fullsearch";
export type paramGeneric = obj[];

export namespace Functions {
  // ? NAMESPACE FOR GENERATOR HELPER FUNCTIONS AND OTHER UTILITY FUNCTIONS
  export namespace GenAndHelpers {
    export const numToString = (num: number): string => {
      let newNum = num.toLocaleString("en-US");
      return newNum;
    };

    // ? HELPER FOR GENERATING RANDOM NUMBER

    export function randomInteger(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // ? CACHE COUNTRIES TO LOCAL STORAGE
    export const cacheCountries = (payload: Country[]) => {
      localStorage.setItem("c-loaded", JSON.stringify(payload));
    };

    // ? GET CACHED COUNTRIES
    export const getCachedCountries = () => {
      const localCountries: Country[] = localStorage.getItem("c-loaded")
        ? JSON.parse(localStorage.getItem("c-loaded")!)
        : [];
      return localCountries;
    };
  }

  // ? NAMESPACE FOR FORMATTER FUNCTIONS
  export namespace Formatters {
    // ? FORMAT THE NATIVE NAME OBJECT

    export const formatNativeName = <T extends {}>(obj: T) => {
      if (obj) {
        const objValues = Object.values(obj) as { [key: string]: string }[];
        let arrayedNativeNames = objValues.map((lang) => {
          return lang.common;
        });
        arrayedNativeNames = arrayedNativeNames.filter((lang, index, arr) => {
          if (arr[index + 1] && lang === arr[index + 1]) {
            return false;
          }
          return true;
        });
        return arrayedNativeNames.join(", ");
      }
    };

    // ? HELPER FOR FORMATTING INCOMING DATA (ALL AND REGION ENDPOINTS)

    export const formatData = <T extends paramGeneric>(
      api_data: T,
      route: route = "all"
    ): Country[] => {
      let newData = api_data.map((country) => {
        const {
          name: { common: commonName, official: officialName, nativeName },
          tld,
          currencies,
          capital,
          region,
          subregion,
          languages,
          borders,
          population,
          flags,
        } = country;

        // const id = Math.random().toString(36).substring(2, 7);
        // const id = index;

        return {
          commonName,
          officialName,
          nativeName,
          tld,
          currencies,
          region,
          capital,
          subregion,
          languages,
          borders,
          population,
          flags,
        };
      });

      let finalDataSet: Country[];

      if (route === "region") {
        const lower = GenAndHelpers.randomInteger(0, 3);
        const upper = GenAndHelpers.randomInteger(50, 59);

        newData = newData.slice(lower, upper);
        newData = _.shuffle(newData);
        newData = newData.slice(0, 8);

        finalDataSet = newData.map((country, index) => {
          const {
            commonName,
            officialName,
            nativeName,
            tld,
            currencies,
            region,
            capital,
            subregion,
            languages,
            borders,
            population,
            flags,
          } = country;

          const id = index;
          return {
            id,
            commonName,
            officialName,
            nativeName,
            tld,
            currencies,
            region,
            capital,
            subregion,
            languages,
            borders,
            population,
            flags,
          };
        });

        return finalDataSet;
      } else if (route === "borders") {
        finalDataSet = newData.map((country, index) => {
          const {
            commonName,
            officialName,
            nativeName,
            tld,
            currencies,
            region,
            capital,
            subregion,
            languages,
            borders,
            population,
            flags,
          } = country;

          const id = index;
          return {
            id,
            commonName,
            officialName,
            nativeName,
            tld,
            currencies,
            region,
            capital,
            subregion,
            languages,
            borders,
            population,
            flags,
          };
        });
        return finalDataSet;
      } else if (route === "fullsearch") {
        newData = newData.slice(0, 8);

        // FINAL DATA MAPPING FOR PREDICTABLE ID VALUES
        finalDataSet = newData.map((country, index) => {
          const {
            commonName,
            officialName,
            nativeName,
            tld,
            currencies,
            region,
            capital,
            subregion,
            languages,
            borders,
            population,
            flags,
          } = country;

          const id = index;
          return {
            id,
            commonName,
            officialName,
            nativeName,
            tld,
            currencies,
            region,
            capital,
            subregion,
            languages,
            borders,
            population,
            flags,
          };
        });

        return finalDataSet;
      }

      // PROD
      // * lower bound = 0 - 117 (PROD)
      // * upper bound = 126 - 200(PROD)
      // const lower = randomInteger(0, 117);
      // const upper = randomInteger(126, 202);
      // ------------END PROD------------
      // --------DEV------
      // * lower bound = 0 - 9(DEV)
      // * upper bound = 10 - 19(DEV)
      const lower = GenAndHelpers.randomInteger(0, 4);
      const upper = GenAndHelpers.randomInteger(15, 19);
      // -----------END DEV--------------
      newData = newData.slice(lower, upper);
      newData = _.shuffle(newData);
      newData = newData.slice(0, 8);

      // FINAL DATA MAPPING FOR PREDICTABLE ID VALUES
      finalDataSet = newData.map((country, index) => {
        const {
          commonName,
          officialName,
          nativeName,
          tld,
          currencies,
          region,
          capital,
          subregion,
          languages,
          borders,
          population,
          flags,
        } = country;

        const id = index;
        return {
          id,
          commonName,
          officialName,
          nativeName,
          tld,
          currencies,
          region,
          capital,
          subregion,
          languages,
          borders,
          population,
          flags,
        };
      });

      return finalDataSet;
    };

    // ? HELPER FOR FORMATTING CURRENCIES

    export const formatCurrencies = (arg: currencies) => {
      let _currencies = Object.values(arg).map((curr) => curr?.name);
      const stringed_currs = _currencies.join(", ");
      return stringed_currs;
    };

    // ? HELPER FOR FORMATTING LANGUAGES

    export const formatLangs = (arg: langs) => {
      let _langs = Object.values(arg) as string[];
      const stringed_langs = _langs.join(", ");
      return stringed_langs;
    };
  }
}

// ! USER DEFINED TYPE GUARD FOR VALIDATING ERROR TYPES

interface searchErr {
  response: {
    data: {
      status: 404;
      message: string;
    };
  };
}

export const isSearchError = (res: any): res is searchErr => {
  return res.response !== undefined;
};
