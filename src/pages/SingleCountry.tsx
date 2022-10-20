import React from "react";
import SingleStyles from "../components/styled/Single";
import { BiArrowBack } from "react-icons/bi";

const SingleCountry = () => {
  return (
    <SingleStyles>
      <header>
        {/* ======BACK BUTTON======== */}

        <button className="back_btn">
          <BiArrowBack />
          <span>Back</span>
        </button>
      </header>

      {/* ======END BACK BUTTON======= */}

      <div className="center">
        {/* ========FLAG IMAGE======== */}
        <div className="flag">
          <img src="https://via.placeholder.com/600x400.png" alt="flag-image" />
        </div>
        {/* =======END FLAG IMAGE======= */}

        {/* ========METRICS AND INFO========= */}
        <div className="info">
          <div className="title">
            <h2>Belgium</h2>
          </div>

          <div className="info_2">
            {/* ========FIRST SUB INFO========= */}
            <div className="info_2_1">
              <h4>
                Native Name: <span>Belgie</span>
              </h4>
              <h4>
                Population: <span>11,319,511</span>
              </h4>
              <h4>
                Region: <span>Europe</span>
              </h4>
              <h4>
                Sub Region: <span>Western Europe</span>
              </h4>
              <h4>
                Capital: <span>Brussels</span>
              </h4>
            </div>
            {/* ========END FIRST SUB-INFO=========== */}

            {/* =========SECOND SUB-INFO=========== */}
            <div className="info_2_2">
              <h4>
                Top Level Domain: <span>.be</span>
              </h4>
              <h4>
                Currencies: <span>Euro</span>
              </h4>
              <h4>
                Languages: <span>Dutch, French, German</span>
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
