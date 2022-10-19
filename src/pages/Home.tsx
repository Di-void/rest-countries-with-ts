import React from "react";
import HomePage from "../components/styled/HomePage";
import { GoSearch } from "react-icons/go";
import { CountryCard } from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  // * STATE VALUES AND CONTEXT
  const { allCountries } = useGlobalContext();
  // console.log(allCountries);

  // * LOGIC LAYER

  // ! RETs....
  return (
    <HomePage>
      <div className="_center">
        <header>
          {/* THE SEARCHBAR */}

          <div className="searchbar">
            <label htmlFor="_search" className="s-icon">
              <GoSearch />
            </label>

            <div className="input">
              <input
                id="_search"
                type="text"
                placeholder="Search for a country..."
              />
            </div>
          </div>

          {/* =======END SEARCHBAR======= */}

          {/* ========FILTER DROPDOWN========= */}
          <div className="select_regions">
            <select name="region_filter" id="region_select">
              <option value="">Filter By Region </option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
          {/* ========END FITLER DROPDOWN=========== */}
        </header>

        <div className="countries">
          {allCountries.map((country) => {
            return <CountryCard key={country.id} country={country} />;
          })}
        </div>
      </div>
    </HomePage>
  );
};

export default Home;
