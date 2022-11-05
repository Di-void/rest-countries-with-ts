import HomePage from "../components/styled/HomePage";
import { GoSearch } from "react-icons/go";
import { CountryCard } from "../components";
import CountryCardLoader from "../components/loading/CCLoader";
import { useGlobalContext } from "../context";
import { mockAll } from "../utils/MockAll";
import { useEffect, useState } from "react";
import { Country, Region } from "../interfaces";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // * STATE VALUES AND CONTEXT
  const {
    allCountries,
    isLoading,
    error,
    filterByRegion,
    getOptFromLocalStorage,
    saveOptToLocalStorage,
    inputVal,
    setInputVal,
    handleSearchInputChange,
    searchError,
  } = useGlobalContext();
  const [selected, setSelected] = useState<Region>("all");
  const navigate = useNavigate();

  // * LOGIC LAYER

  // TYPE DEFS
  interface Option {
    label: string;
    value: Region;
  }

  // OPTIONS ARRAY
  const regions: Option[] = [
    {
      label: "Fitler By region",
      value: "all",
    },
    {
      label: "Africa",
      value: "africa",
    },
    {
      label: "America",
      value: "america",
    },
    {
      label: "Asia",
      value: "asia",
    },
    {
      label: "Europe",
      value: "europe",
    },
    {
      label: "Oceania",
      value: "oceania",
    },
  ];

  // HANDLE CHANGE REGION
  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newOpt = e.target.value as Region;
    setSelected(e.target.value as Region);
    filterByRegion(newOpt);
    saveOptToLocalStorage(newOpt);
  };

  // ? HELPER FOR HYPERLINKING AND CHANGING OF ROUTES

  const hangleChangeRoute = (id: number, parentArr: Country[]) => {
    navigate(`info/${id}`, { state: { arr: parentArr } });
  };

  const onSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
    handleSearchInputChange(e.target.value);
  };

  useEffect(() => {
    const Region = getOptFromLocalStorage();
    setSelected(Region);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ! RETs....

  if (error.status) {
    return <p style={{ color: "red" }}>Something's wrong.. Try reloading</p>;
  }
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
                value={inputVal}
                placeholder="Search for a country..."
                onChange={onSearchInputChange}
              />
            </div>
          </div>

          {/* =======END SEARCHBAR======= */}

          {/* ========FILTER DROPDOWN========= */}
          <div className="select_regions">
            <select
              name="region_filter"
              id="region_select"
              value={selected}
              onChange={handleRegionChange}
            >
              {regions.map((region, index) => {
                return (
                  <option value={region.value} key={index}>
                    {region.label}
                  </option>
                );
              })}
            </select>
          </div>
          {/* ========END FITLER DROPDOWN=========== */}
        </header>

        <div className="countries">
          {isLoading && error.status === false ? (
            mockAll.map((country) => {
              return <CountryCardLoader key={country.id} />;
            })
          ) : !isLoading && searchError.status ? (
            <p>{searchError.msg}</p>
          ) : (
            allCountries!.map((country, _, array) => {
              return (
                <button
                  onClick={() => hangleChangeRoute(country.id, array)}
                  key={country.id}
                  className="link"
                >
                  <CountryCard country={country} />
                  {/* <CountryCardLoader key={country.id} />; */}
                </button>
              );
            })
          )}
        </div>
      </div>
    </HomePage>
  );
};

export default Home;
