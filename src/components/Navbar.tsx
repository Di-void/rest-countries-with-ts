import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = () => {
  const getStorageTheme = () => {
    let theme = "light-mode";
    if (localStorage.getItem("theme")) {
      theme = localStorage.getItem("theme")!;
    }
    return theme;
  };
  const navigate = useNavigate();
  const [theme, setTheme] = useState(getStorageTheme());
  // FUNCTIONS AND SIDE EFFECTS
  const toggleTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode");
    } else {
      setTheme("light-mode");
    }
  };

  const goHome = () => {
    navigate("/");
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <Wrapper>
      <div>
        <h3 onClick={goHome}>Where in the world?</h3>
      </div>

      <button onClick={toggleTheme}>
        {theme === "light-mode" ? <BsMoon /> : <BsSun />}
        <span>{theme === "light-mode" ? "Dark Mode" : "Light Mode"}</span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  /* border: 1px solid black; */
  z-index: 99 !important;
  background-color: var(--clr-Elems);
  color: var(--clr-Txt);
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0.75rem;
  box-shadow: 0px 13px 2px -9px rgba(0, 0, 0, 0.1);

  h3 {
    cursor: pointer;
  }

  button {
    color: var(--clr-Txt);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    border: transparent;
    font-family: var(--ff-primary);
    font-size: 16px;
    font-weight: 600;
    width: 105px;
    cursor: pointer;
  }

  button:hover {
    outline: 2px dotted var(--clr-LMInp);
  }
`;

export default Navbar;
