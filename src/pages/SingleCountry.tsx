import { useEffect } from "react";
import useSWR from "swr";
import SingleStyles from "../components/styled/Single";
import Button from "../components/styled/Button";
import { BiArrowBack } from "react-icons/bi";
import {
  numToString,
  formatNativeName,
  formatCurrencies,
  formatLangs,
  fetchSingleCountry,
} from "../utils/functions";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { mockBorders } from "../utils/MockAll";
import { useGlobalContext } from "../context";

// OTHER FUNCTIONS AND GLOBALS

// ? MAIN COMPONENT
const SingleCountry = () => {
  // * STATE VALUES AND CONTEXT
  const { fullName } = useParams();
  const { data, error } = useSWR(
    `https://restcountries.com/v3.1/name/${fullName}?fullText=true`,
    fetchSingleCountry
  );
  const { findBorderCountries, borders, setError, borderError } =
    useGlobalContext();
  let navigate = useNavigate();

  // * FUNCTIONS AND SIDE EFFECTS
  useEffect(() => {
    window.scrollTo(0, 0);
    if (data) {
      const newCountry = data[0];
      const stringedBorderCodes = newCountry.borders?.join();
      if (stringedBorderCodes) {
        findBorderCountries(stringedBorderCodes);
      }
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setError((old) => {
        let newErr = {
          ...old,
          status: true,
        };
        return newErr;
      });
    } else {
      setError((old) => {
        let newErr = {
          ...old,
          status: false,
          msg: "",
        };

        return newErr;
      });
    }
  }, [error]);

  // ! RETs...

  if (error) {
    return (
      <>
        <p style={{ color: "red" }}>Failed to Load...</p>
        <Button>
          <button
            style={{ marginTop: "20px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <BiArrowBack />
            <span>Go Back Home</span>
          </button>
        </Button>
      </>
    );
  }
  if (!data) {
    return <p>Loading...</p>;
  }
  const newCountry = data[0];
  const { languages, currencies, nativeName, population, capital } = newCountry;
  const stringedBorderCodes = newCountry.borders?.join();
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
        </div>
        {/* =======END FLAG IMAGE======= */}

        {/* ========METRICS AND INFO========= */}
        <div className="info">
          <div className="title">
            <h2>{newCountry.commonName}</h2>
          </div>

          <div className="info_2">
            {/* ========FIRST SUB INFO========= */}
            <div className="info_2_1">
              <h4>
                Native Name: <span>{formatNativeName(nativeName)}</span>
              </h4>
              <h4>
                Population: <span>{numToString(population)}</span>
              </h4>
              <h4>
                Region: <span>{newCountry.region}</span>
              </h4>
              <h4>
                Sub Region: <span>{newCountry.subregion}</span>
              </h4>
              <h4>
                Capital: <span>{capital ? capital[0] : "NIL"}</span>
              </h4>
            </div>
            {/* ========END FIRST SUB-INFO=========== */}

            {/* =========SECOND SUB-INFO=========== */}
            <div className="info_2_2">
              <h4>
                Top Level Domain:{" "}
                <span>{newCountry.tld ? newCountry.tld[0] : "Nil"}</span>
              </h4>
              <h4>
                Currencies:{" "}
                <span>{currencies ? formatCurrencies(currencies) : "NIL"}</span>
              </h4>
              <h4>
                Languages:{" "}
                <span>{languages ? formatLangs(languages) : "NIL"}</span>
              </h4>
            </div>

            {/* ============END SECOND SUB-INFO============ */}
          </div>

          <div className="info_3">
            <h3>Border Countries: </h3>

            <div className="borders">
              {!stringedBorderCodes ? (
                <p>NO BORDERS...</p>
              ) : borderError.status ? (
                <p>{borderError.msg}</p>
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
                  return (
                    <Link
                      to={`/info/${country.commonName}`}
                      className="border-link"
                      key={country.id}
                    >
                      {country.commonName}
                    </Link>
                  );
                })
              )}
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
