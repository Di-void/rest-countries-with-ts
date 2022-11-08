import styled from "styled-components";

const SingleStyles = styled.section`
  /* border: 1px solid black; */
  padding: 0 0.75rem;

  header {
    margin-bottom: 40px;
  }

  .center {
    //
    .flag {
      box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
      height: 250px;
      width: 100%;
      max-width: 400px;
      img {
        width: 100%;
        height: 100%;
      }
    }

    // INFO

    .info {
      /* border: 1px solid black; */
      color: var(--clr-Txt);
      @media screen and (min-width: 1100px) {
        margin-top: 0;
        width: 70%;
      }
      .title {
        margin-top: 30px;
        @media screen and (min-width: 1100px) {
          margin-top: 0;
        }
        h2 {
          //
        }
      }
      // ====== END TITLE

      .info_2 {
        /* border: 1px solid black; */
        margin-top: 30px;

        @media screen and (min-width: 700px) {
          display: grid;
          grid-template-columns: 40% 50%;
          gap: 1.6em;
        }
        @media screen and (min-width: 1100px) {
          margin-top: 15px;
        }
        .info_2_1 {
          /* border: 1px solid black; */
          h4 {
            margin-top: 10px;
            font-size: 16px;
            font-weight: 600;
            span {
              font-weight: 300;
            }
          }
        }

        .info_2_2 {
          /* border: 1px solid black; */
          margin-top: 30px;
          @media screen and (min-width: 700px) {
            margin-top: 0;
          }
          h4 {
            margin-top: 10px;
            font-size: 16px;
            font-weight: 600;
            span {
              font-weight: 300;
            }
          }
        }
      }
      // ========== END SUBINFO SECTION 1

      .info_3 {
        /* border: 1px solid black; */
        width: initial;
        max-width: 390px;
        margin-top: 30px;
        @media screen and (min-width: 700px) {
          display: flex;
          max-width: 100%;
          align-items: center;
        }
        h3 {
          font-weight: 600;
        }

        .borders {
          /* border: 1px solid black; */
          padding: 0.35rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
          grid-gap: 1em;
          margin-top: 10px;

          @media screen and (min-width: 700px) {
            width: 70%;
            margin-left: 20px;
            margin-top: 0;
          }
          button {
            background-color: transparent;
            background-color: var(--clr-Elems);
            color: var(--clr-Txt);
            border: transparent;
            box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            padding: 0.35rem 1rem;
            text-align: center;
            text-decoration: none;
            cursor: pointer;

            &:hover {
              box-shadow: 0px 0px 5px 6px rgba(0, 0, 0, 0.1);
            }
          }
        }
      }
    }

    @media screen and (min-width: 1100px) {
      display: flex;
      /* justify-content: space-between; */
      .flag {
        height: 45vh;
      }
      .info {
        /* border: 1px solid black; */
        margin-left: 100px;
      }
    }

    // ========= END SUBINFO SECTION 2

    // ======= END INFO
  }
`;

export default SingleStyles;
