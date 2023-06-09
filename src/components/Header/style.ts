import styled from "styled-components";

export const Container = styled.header`
  color: white;
  background-color: #111;

  div {
    width: 100%;
    padding: 0 1rem;
    max-width: 1500px;
    display: flex;
    gap: 0.25rem;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    font-family: Rubik;
    font-weight: bold;

    h1 {
      font-family: Rubik;
      font-size: 2rem;
      @media (max-width: 1024px) {
        font-size: 1.5rem;
      }
      @media (max-width: 480px) {
        font-size: 1.25rem;
        padding: 0.5rem 0;
      }
    }

    nav {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      height: 100%;
      a {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        font-family: Rubik;
        height: 100%;
        padding: 1rem;
        text-decoration: none;
        color: white;
        font-size: 1rem;
        &:visited {
          color: white;
        }

        &:hover {
          background-color: #222;
        }

        @media (max-width: 480px) {
          padding: 0.5rem;
          svg {
            width: 1rem;
          }
        }
      }
    }
  }
`;
