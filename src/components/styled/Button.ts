import styled from "styled-components";

const Button = styled.div`
  button {
    text-decoration: none;
    font-family: var(--ff-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 1.75rem;
    border: transparent;
    border-radius: 3px;
    background: transparent;
    cursor: pointer;
    box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
    span {
      margin-left: 10px;
    }
  }

  button:hover {
    box-shadow: 0px 0px 5px 6px rgba(0, 0, 0, 0.1);
  }
`;

export default Button;
