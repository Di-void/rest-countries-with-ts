import styled from "styled-components";

const HomePage = styled.main`
  /* border: 1px solid black; */

  ._center {
    //
    header {
      /* border: 1px solid black; */

      /* =========SEARCHBAR========== */
      .searchbar {
        box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.1);
        background-color: white;
        color: var(--clr-LMInp);
        padding: 1.5rem 1.5rem;
        display: flex;
        align-items: center;
        .s-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 15%;
          /* border: 1px solid black; */
          font-size: 20px;
        }

        .input {
          width: 80%;
          /* border: 1px solid black; */
          margin-left: 30px;
          input {
            width: 100%;
            border: transparent;
            outline: none;
            font-size: 14px;
            &::placeholder {
              font-family: var(--ff-primary);
              font-size: 14px;
              color: var(--clr-LMInp);
            }
          }
        }
      }

      /* ======END SEARCHBAR======== */

      /* ======FILTER DROPDOWN======= */

      .select_regions {
        /* border: 1px solid black; */
        margin-top: 30px;
        width: 47%;
        max-width: 210px;
        box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.1);
        padding: 1rem 0.75rem;

        select {
          outline: none;
          border: transparent;
          background-color: white;
          width: 100%;
          font-size: 14px;
          font-family: var(--ff-primary);

          option {
            font-size: 14px;
          }
        }
      }

      /* ========END FILTER DROPDOWN======== */
    }

    .countries {
      /* border: 1px solid black; */
      padding: 1.2rem 1.4rem;
      margin-top: 30px;
      display: grid;
      grid-template-rows: repeat(8, 1fr);
      grid-row-gap: 1.5em;
    }
  }
`;

export default HomePage;
