import styled from "styled-components";

const HomePage = styled.main`
  /* border: 1px solid black; */

  ._center {
    //
    header {
      @media screen and (min-width: 700px) {
        display: flex;
        justify-content: space-between;
      }
      @media screen and (min-width: 1000px) {
        padding: 0 1.5rem;
      }

      /* =========SEARCHBAR========== */
      .searchbar {
        box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.1);
        background-color: var(--clr-Elems);
        color: var(--clr-Txt);
        padding: 0 1.5rem;
        display: flex;
        align-items: center;

        @media screen and (min-width: 700px) {
          width: 60%;
          max-width: 500px;
        }
        .s-icon {
          color: var(--clr-Txt);
          display: flex;
          justify-content: center;
          align-items: center;
          width: 15%;
          font-size: 20px;
        }

        .input {
          background-color: var(--clr-Elems);
          padding: 1.5rem 0;
          height: 100%;
          width: 80%;
          margin-left: 30px;
          @media screen and (min-width: 700px) {
            padding: 0.8rem 0;
          }
          input {
            background-color: var(--clr-Elems);
            color: var(--clr-Txt);
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
        background-color: var(--clr-Elems);
        margin-top: 30px;
        color: var(--clr-Txt);
        width: 47%;
        height: 50px;
        max-width: 200px;
        box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.1);
        padding: 0.3rem 0.75rem;

        @media screen and (min-width: 700px) {
          margin-top: 0;
        }

        select {
          outline: none;
          border: transparent;
          background-color: var(--clr-Elems);
          color: var(--clr-Txt);
          width: 100%;
          height: 100%;
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
      padding: 1.2rem 1.4rem;
      margin-top: 30px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1.5em;

      @media screen and (min-width: 700px) {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
      }

      /* =========LINK=========== */
      .link {
        width: 100%;
        height: 370px;
        background: transparent;
        border: transparent;
        overflow: hidden;
        border-radius: 7px;
        box-shadow: 0px 4px 21px -4px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        @media screen and (min-width: 300px) {
          max-width: 320px;
        }

        &:hover {
          box-shadow: 0px 4px 7px 17px rgba(0, 0, 0, 0.1);
        }
        /* =====IMAGE BOX====== */
        .img {
          width: 100%;
          height: 57%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        /* ========IMAGE BOX====== */

        /* ========INFO BOX========== */
        .info {
          height: 45%;
          padding: 0.75rem;
          background-color: var(--clr-Elems);
          color: var(--clr-Txt);

          header {
            border: none;
            padding: 0;
            text-align: left;
            h3 {
              color: var(--clr-Txt);
            }
          }

          .metrics {
            margin-top: 15px;
            text-align: left;
            color: var(--clr-Txt);
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
      }

      /* =========END LINK========= */
    }
  }
`;

export default HomePage;
