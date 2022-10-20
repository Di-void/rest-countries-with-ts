import React from "react";
import styled from "styled-components";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// ? [---------LOADING COMPONENTS-------------]
const CountryCardLoader = () => {
  // ! RETs...
  return (
    <Wrapper>
      <div className="img">
        <Skeleton height="100%" />
      </div>

      <div className="info">
        <header>
          <h3>
            <Skeleton count={1} />
          </h3>
        </header>

        <div className="metrics">
          <h5>
            <span>Population:</span>
            <div>
              <Skeleton width="100%" containerClassName="ll" count={1} />
            </div>
          </h5>
          <h5>
            <span>Region:</span>
            <div>
              <Skeleton width="100%" count={1} />
            </div>
          </h5>
          <h5>
            <span>Capital:</span>
            <div>
              <Skeleton width="100%" count={1} />
            </div>
          </h5>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  /* border: 1px solid black; */
  overflow: hidden;
  border-radius: 7px;
  box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  /* =====IMAGE BOX====== */
  .img {
    width: 100%;
    height: 200px;
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
        padding: 0 0.35rem;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        font-weight: 600;

        div {
          width: 70%;
        }
      }
    }
  }

  /* ==========END INFO BOX========= */
`;

export default CountryCardLoader;
