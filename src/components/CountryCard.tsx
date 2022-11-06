import { Country } from "../interfaces";
import { Functions } from "../utils/functions";

// TYPES AND INTERFACES

interface Props {
  country: Country;
}

// ? MAIN COMPONENT
const CountryCard: React.FC<Props> = ({ country }) => {
  // * STATE VALUES ANF CONTEXT
  const {
    commonName,
    flags: { png },
    population,
    region,
    capital,
  } = country;
  // * LOGIC LAYER

  // ! RETs.....
  return (
    <>
      <div className="img">
        <img src={png} alt="country-img" />
      </div>

      <div className="info">
        <header>
          <h3>{commonName}</h3>
        </header>

        <div className="metrics">
          <h5>
            Population:{" "}
            <span>{Functions.GenAndHelpers.numToString(population)}</span>
          </h5>
          <h5>
            Region: <span>{region}</span>
          </h5>
          <h5>
            Capital: <span>{capital ? capital[0] : "Nil"}</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
