import styled from "styled-components";
import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <h3>Where in the world?</h3>
      </div>

      <button>
        <BsMoon />
        <span>Dark Mode</span>
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  /* border: 1px solid black; */
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0.75rem;
  box-shadow: 0px 16px 7px -3px rgba(0, 0, 0, 0.1);

  button {
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
