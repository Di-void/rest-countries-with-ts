// ALL TYPES AND INTERFACES SHOULD LIVE HERE

// =========COUNTRY OBJECT INTERFACE==========

// country object

export interface Country {
  id: string;
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
  // hello: string;
}

// ==========END CONTEXT INTERFACE=========
