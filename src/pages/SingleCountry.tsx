import { useEffect } from "react";
import SingleStyles from "../components/styled/Single";
import Button from "../components/styled/Button";
import { BiArrowBack } from "react-icons/bi";
import { Functions } from "../utils/functions";
import Formatters = Functions.Formatters;
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Country } from "../interfaces";
import { mockBorders } from "../utils/MockAll";
import { useGlobalContext } from "../context";

// OTHER FUNCTIONS AND GLOBALS

// ? MAIN COMPONENT
const SingleCountry = () => {
  // * STATE VALUES AND CONTEXT
  const { id } = useParams();
  const { findBorderCountries, borders, error, borderError } =
    useGlobalContext();
  let navigate = useNavigate();
  const location = useLocation();

  // ! ERROR HANDLING FOR PARAM VALUES

  if (!location.state) {
    return (
      <>
        <p className="all-error">Failed to load!</p>
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
  const originArr: Country[] = location.state.arr;
  const newCountry = originArr.find(
    (country) => country.id.toString() === id
  ) as Country;
  const { languages, currencies, nativeName, population, capital } = newCountry;
  const stringedBorderCodes = newCountry.borders?.join();

  // * FUNCTIONS AND SIDE EFFECTS

  const hangleChangeRoute = (id: number, parentArr: Country[]) => {
    navigate(`/info/${id}`, { state: { arr: parentArr } });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (stringedBorderCodes) {
      findBorderCountries(stringedBorderCodes);
    }
  }, [originArr]);

  // ! RETs...

  if (error.status) {
    return (
      <>
        <p className="all-error">{error.msg}</p>
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
  return (
    <SingleStyles>
      <header>
        {/* ======BACK BUTTON======== */}

        <Button>
          <button
            className="back_btn"
            onClick={() => {
              navigate(-1);
            }}
          >
            <BiArrowBack />
            <span>Back</span>
          </button>
        </Button>
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
                Native Name:{" "}
                <span>
                  {nativeName ? Formatters.formatNativeName(nativeName) : "NIL"}
                </span>
              </h4>
              <h4>
                Population:{" "}
                <span>{Functions.GenAndHelpers.numToString(population)}</span>
              </h4>
              <h4>
                Region: <span>{newCountry.region}</span>
              </h4>
              <h4>
                Sub Region:{" "}
                <span>
                  {newCountry.subregion ? newCountry.subregion : "NIL"}
                </span>
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
                <span>
                  {currencies ? Formatters.formatCurrencies(currencies) : "NIL"}
                </span>
              </h4>
              <h4>
                Languages:{" "}
                <span>
                  {languages ? Formatters.formatLangs(languages) : "NIL"}
                </span>
              </h4>
            </div>

            {/* ============END SECOND SUB-INFO============ */}
          </div>

          <div className="info_3">
            <h3>Border Countries: </h3>

            <div className="borders">
              {/* ============== */}
              {!stringedBorderCodes ? (
                <p>NO BORDERS...</p>
              ) : borderError.status ? (
                <p className="all-error">{borderError.msg}</p>
              ) : !borders ? (
                mockBorders.map((obj) => {
                  return (
                    <div key={obj.id}>
                      <Skeleton className="loader" height="100%" />
                    </div>
                  );
                })
              ) : (
                borders.map((country, _, array) => {
                  return (
                    <button
                      key={country.id}
                      onClick={() => hangleChangeRoute(country.id, array)}
                    >
                      {country.commonName}
                    </button>
                  );
                })
              )}

              {/* ============= */}
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
