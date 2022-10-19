import React from "react";
import styled from "styled-components";
import { Country } from "../interfaces";
import { numToString } from "../utils/functions";

// TYPES AND INTERFACES

interface Props {
  country: Country;
}

// ? MAIN COMPONENT
const CountryCard: React.FC<Props> = ({ country }) => {
  // * STATE VALUES ANF CONTEXT
  const {
    officialName,
    flags: { svg },
    population,
    region,
    capital,
  } = country;
  // * LOGIC LAYER

  // ! RETs.....
  return (
    <Wrapper>
      <div className="img">
        <img src={svg} alt="country-img" />
      </div>

      <div className="info">
        <header>
          <h3>{officialName}</h3>
        </header>

        <div className="metrics">
          <h5>
            Population: <span>{numToString(population)}</span>
          </h5>
          <h5>
            Region: <span>{region}</span>
          </h5>
          <h5>
            Capital: <span>{capital}</span>
          </h5>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  /* border: 1px solid black; */
  /* padding: 0.5rem; */
  overflow: hidden;
  border-radius: 7px;
  box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 7px 17px rgba(0, 0, 0, 0.1);
  }
  /* =====IMAGE BOX====== */
  .img {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  /* ========IMAGE BOX====== */

  /* ========INFO BOX========== */
  .info {
    padding: 0.75rem;

    header {
      //
    }

    .metrics {
      margin-top: 15px;
      h5 {
        font-size: 14px;
        font-weight: 600;

        span {
          font-weight: 300;
        }
      }
    }
  }

  /* ==========END INFO BOX========= */
`;

export default CountryCard;
