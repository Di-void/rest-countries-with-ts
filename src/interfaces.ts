// ALL TYPES AND INTERFACES SHOULD LIVE HERE

// =========COUNTRY OBJECT INTERFACE==========

// country object

export interface Country {
  id: number;
  commonName: string;
  officialName: string;
  nativeName: {
    [key: string]:
      | {
          official: string;
          common: string;
        }
      | undefined;
  };
  tld: string[];
  currencies: {
    [key: string]:
      | {
          name: string | undefined;
        }
      | undefined;
  };
  region: string;
  capital: string[];
  subregion: string;
  languages: {
    [key: string]: string | undefined;
  };
  borders?: string[];
  population: number;
  flags: {
    png: string;
    svg: string;
  };
}

// ==========END COUNTRY OBJECT INERFACE==========

// ==========CONTEXT INTERFACE=========

export interface AppContextType {
  allCountries: Country[];
  isLoading: boolean;
  error: { msg: string; status: boolean };
  filterByRegion: (val: Region) => Promise<void>;
  saveOptToLocalStorage: (opt: Region) => void;
  getOptFromLocalStorage: () => Region;
  // hello: string;
}

// LITERAL TYPE
export type Region =
  | "africa"
  | "america"
  | "asia"
  | "europe"
  | "oceania"
  | "all";

// ==========END CONTEXT INTERFACE=========
