import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleStyles from "../components/styled/Single";
import { BiArrowBack } from "react-icons/bi";
import {
  numToString,
  formatNativeName,
  paramGeneric,
} from "../utils/functions";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Country } from "../interfaces";
import { useGlobalContext } from "../context";

// OTHER FUNCTIONS AND GLOBALS

const SEARCH_BY_LIST_OF_CODES =
  "https://restcountries.com/v3.1/alpha?codes={code},{code},{code}";

// ? MAIN COMPONENT
const SingleCountry = () => {
  // * STATE VALUES AND CONTEXT
  const { id } = useParams();
  const { allCountries, isLoading } = useGlobalContext();
  let navigate = useNavigate();

  // * FUNCTIONS AND SIDE EFFECTS
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ! RETs...

  // ERROR HANDLING
  if (allCountries.length < 1) {
    return <p>Loading....</p>;
  }

  // FROM THIS LINE, 'newCountry' CAN NEVER BE UNDEFINED
  // -- LOGIC LAYER
  const newCountry = allCountries.find(
    (country) => country.id.toString() === id
  ) as Country;
  // console.log(newCountry);

  const { languages, currencies, nativeName, population } = newCountry;

  // languages
  let _langs = Object.values(languages) as string[];
  const stringed_langs = _langs.join(", ");

  // currencies
  let _currencies = Object.values(currencies).map((curr) => curr?.name);
  const stringed_currs = _currencies.join(", ");

  // !TG(TYPE GUARD)
  // if ("borders" in Country) {

  // }
  return (
    <SingleStyles>
      <header>
        {/* ======BACK BUTTON======== */}

        <button
          className="back_btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          <BiArrowBack />
          <span>Back</span>
        </button>
      </header>

      {/* ======END BACK BUTTON======= */}

      <div className="center">
        {/* ========FLAG IMAGE======== */}
        <div className="flag">
          <img src={newCountry.flags.png} alt="flag-image" />
          {/* <img src="https://via.placeholder.com/600x400.png" alt="flag-image" /> */}
        </div>
        {/* =======END FLAG IMAGE======= */}

        {/* ========METRICS AND INFO========= */}
        <div className="info">
          <div className="title">
            <h2>{newCountry.commonName}</h2>
            {/* <h2>dkfjakdfj</h2> */}
          </div>

          <div className="info_2">
            {/* ========FIRST SUB INFO========= */}
            <div className="info_2_1">
              <h4>
                Native Name: <span>{formatNativeName(nativeName)}</span>
                {/* Native Name: <span>Bkfk</span> */}
              </h4>
              <h4>
                Population: <span>{numToString(population)}</span>
                {/* Population: <span>ldkfalkdf</span> */}
              </h4>
              <h4>
                Region: <span>{newCountry.region}</span>
                {/* Region: <span>dfkadlfjldkj</span> */}
              </h4>
              <h4>
                Sub Region: <span>{newCountry.subregion}</span>
                {/* Sub Region: <span>kdjfkd</span> */}
              </h4>
              <h4>
                Capital: <span>{newCountry.capital}</span>
                {/* Capital: <span>dfadfad</span> */}
              </h4>
            </div>
            {/* ========END FIRST SUB-INFO=========== */}

            {/* =========SECOND SUB-INFO=========== */}
            <div className="info_2_2">
              <h4>
                Top Level Domain: <span>{newCountry.tld[0]}</span>
                {/* Top Level Domain: <span>kjdkfljd</span> */}
              </h4>
              <h4>
                Currencies: <span>{stringed_currs}</span>
                {/* Currencies: <span>kdjfkadfd</span> */}
              </h4>
              <h4>
                Languages: <span>{stringed_langs}</span>
                {/* Languages: <span>dfadfadfdfa</span> */}
              </h4>
            </div>

            {/* ============END SECOND SUB-INFO============ */}
          </div>

          <div className="info_3">
            <h3>Border Countries: </h3>

            <div className="borders">
              <div>France</div>
              <div>Germany</div>
              <div>Netherlands</div>
            </div>
          </div>

          {/* ==========END INFO 3========= */}
        </div>
        {/* =======END MERTRICS AND INFO========== */}
      </div>
    </SingleStyles>
  );
};

export default SingleCountry;
