export const mockAll = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

export const mockBorders = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

export interface countryPlaceholder {
  [key: string]: any;
}
// NEEDED PROPS FORM allCountries
// ( name, tld, currencies, region, capital, subregion, languages, borders, population, flags )
/* 
    e.g **India**

    {
        name: {
        common: "India",
        official: "Republic of India",
        nativeName: {
            eng: {
            official: "Republic of India",
            common: "India",
            },
            hin: {
            official: "भारत गणराज्य",
            common: "भारत",
            },
            tam: {
            official: "இந்தியக் குடியரசு",
            common: "இந்தியா",
            },
          },
        },

        tld: [".in"],
        currencies: {
            INR: {
                name: "Indian rupee"
            }
        },
        capital: ["New Delhi"],
        region: "Asia",
        subregion: "Southern Asia",
        languages: {
            eng: "English",
            hin: "Hindi",
            tam: "Tamil",
        },
        borders: ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"], \property may exist or not\
        population: 1380004385,
        flags: {
            png: "https://flagcdn.com/w320/in.png",
            svg: "https://flagcdn.com/in.svg",
        }
    }
*/

// ----------------
