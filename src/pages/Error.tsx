import styled from "styled-components";
import Button from "../components/styled/Button";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Error = () => {
  let navigate = useNavigate();

  return (
    <Wrapper>
      <div>
        <h3>What are you doing here?</h3>
        <Button>
          <button
            style={{ marginTop: "80px" }}
            onClick={() => {
              navigate("/");
            }}
          >
            <BiArrowBack />
            <span>Go Back Home</span>
          </button>
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* border: 1px solid black; */
  div {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 55vw;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    h3 {
      color: var(--clr-Txt);
      text-align: center;
    }
  }
`;

export default Error;
