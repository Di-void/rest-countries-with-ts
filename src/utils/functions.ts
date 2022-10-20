// * [--------ALL HELPERS AND ABSTRACTIONS MUST BE INCLUDED AND DRAWN OUT OF THIS FILE---------------]

// ? NUMBER TO STRING FUNCTION
import _ from "lodash";
import { Country } from "../interfaces";

export const numToString = (num: number): string => {
  let newNum = num.toLocaleString("en-US");
  return newNum;
};

// ? HELPER FOR GENERATING RANDOM NUMBER

export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ? HELPER FOR GETTING UPPER BOUND

export const getUpper = <T extends paramGeneric>(arr: T) => {
  const lastIndex = arr.length - 1;
  return lastIndex;
};

// ? HELPER FOR FORMATTING INCOMING DATA

type obj = {
  [key: string]: any;
};

type paramGeneric = obj[];

export const formatData = <T extends paramGeneric>(api_data: T): Country[] => {
  let newData: Country[] = api_data.map((country) => {
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

    const id = Math.random().toString(36).substring(2, 7);

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

  // PROD
  // * lower bound = 0 - 117 (PROD)
  // * upper bound = 126 - 200(PROD)
  // const lower = randomInteger(0, 117);
  // const upper = randomInteger(126, 202);
  // ------------END PROD------------
  // --------DEV------
  // * lower bound = 0 - 9(DEV)
  // * upper bound = 10 - 19(DEV)
  const lower = randomInteger(0, 4);
  const upper = randomInteger(15, 19);
  // -----------END DEV--------------
  newData = newData.slice(lower, upper);
  newData = _.shuffle(newData);
  newData = newData.slice(0, 8);
  return newData;
};

// we get 250 items back
// copy from a very random point of the original array to another very random point between some constraints
// shuffle the resulting array
// and copy eight items out of it
