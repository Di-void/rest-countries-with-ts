import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleStyles from "../components/styled/Single";
import { BiArrowBack } from "react-icons/bi";
import {
  numToString,
  formatNativeName,
  formatCurrencies,
  formatLangs,
  paramGeneric,
} from "../utils/functions";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Country } from "../interfaces";
import { mockBorders } from "../utils/MockAll";
import { useGlobalContext } from "../context";

// OTHER FUNCTIONS AND GLOBALS

// ? MAIN COMPONENT
const SingleCountry = () => {
  // * STATE VALUES AND CONTEXT
  const { id } = useParams();
  const { allCountries, findBorderCountries, borders } = useGlobalContext();
  let navigate = useNavigate();

  // * FUNCTIONS AND SIDE EFFECTS
  useEffect(() => {
    window.scrollTo(0, 0);
    if (allCountries) {
      const newCountry = allCountries.find(
        (country) => country.id.toString() === id
      ) as Country;
      const stringedBorderCodes = newCountry.borders?.join();
      if (stringedBorderCodes) {
        findBorderCountries(stringedBorderCodes);
      }
    }
  }, [allCountries]);

  // ERROR HANDLING
  if (!allCountries) {
    return <p>Loading....</p>;
  }

  // FROM THIS LINE, 'newCountry' CAN NEVER BE UNDEFINED
  // -- LOGIC LAYER
  const newCountry = allCountries.find(
    (country) => country.id.toString() === id
  ) as Country;
  // console.log(newCountry);

  const { languages, currencies, nativeName, population, capital } = newCountry;

  const stringedBorderCodes = newCountry.borders?.join();
  // ! RETs...
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
                Capital: <span>{capital ? capital[0] : "NIL"}</span>
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
                Currencies:{" "}
                <span>{currencies ? formatCurrencies(currencies) : "NIL"}</span>
                {/* Currencies: <span>kdjfkadfd</span> */}
              </h4>
              <h4>
                Languages:{" "}
                <span>{languages ? formatLangs(languages) : "NIL"}</span>
                {/* Languages: <span>dfadfadfdfa</span> */}
              </h4>
            </div>

            {/* ============END SECOND SUB-INFO============ */}
          </div>

          <div className="info_3">
            <h3>Border Countries: </h3>

            <div className="borders">
              {!stringedBorderCodes ? (
                <p>NO BORDERS...</p>
              ) : !borders ? (
                mockBorders.map((obj) => {
                  return (
                    <div key={obj.id}>
                      <Skeleton height="100%" />
                    </div>
                  );
                })
              ) : (
                borders.map((country) => {
                  return <div key={country.id}>{country.commonName}</div>;
                })
              )}
              {/* <div>France</div>
              <div>Germany</div>
              <div>Netherlands</div> */}
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
