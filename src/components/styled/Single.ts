import styled from "styled-components";

const SingleStyles = styled.section`
  /* border: 1px solid black; */
  padding: 0 0.75rem;

  header {
    margin-bottom: 40px;

    button {
      text-decoration: none;
      font-family: var(--ff-primary);
      display: flex;
      align-items: center;
      color: var(--clr-Txt);
      justify-content: center;
      padding: 0.4rem 1.75rem;
      border: transparent;
      border-radius: 3px;
      background: transparent;
      background-color: var(--clr-Elems);
      cursor: pointer;
      box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
      span {
        margin-left: 10px;
      }
    }

    button:hover {
      box-shadow: 0px 0px 5px 6px rgba(0, 0, 0, 0.1);
    }
  }

  .center {
    //
    .flag {
      box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.1);
      height: 250px;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    // INFO

    .info {
      color: var(--clr-Txt);
      .title {
        margin-top: 30px;
        h2 {
          //
        }
      }
      // ====== END TITLE

      .info_2 {
        /* border: 1px solid black; */
        margin-top: 30px;
        .info_2_1 {
          //
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
          margin-top: 30px;
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
        h3 {
          font-weight: 600;
        }

        .borders {
          /* border: 1px solid black; */
          padding: 0.35rem;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min-content, 100px));
          grid-gap: 1em;

          margin-top: 10px;
          .border-link {
            background-color: var(--clr-Elems);
            color: var(--clr-Txt);
            box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
            padding: 0.35rem 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
          }
        }
      }
    }

    // ========= END SUBINFO SECTION 2

    // ======= END INFO
  }
`;

export default SingleStyles;
