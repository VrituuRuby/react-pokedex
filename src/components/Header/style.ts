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
      font-size: 2rem;
    }

    nav {
      display: flex;
      align-items: center;
      font-size: 1.5rem;
      gap: 0.5rem;
      height: 100%;
      a {
        height: 100%;
        padding: 1rem;
        text-decoration: none;
        &:visited {
          color: white;
        }

        &:hover {
          background-color: #222;
        }
      }
    }
  }
`;
