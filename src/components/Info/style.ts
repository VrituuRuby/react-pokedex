import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1d1d1d;
  border-radius: 0.5rem;
  padding: 1rem;
  gap: 1rem;
  flex: 1 1 0;

  img {
    max-height: 30vmin;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    gap: 0.5rem;
    width: 100%;

    > div {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      font-family: Rubik;

      h2 {
        font-size: 1.5rem;
        font-family: Rubik;
        color: white;
      }

      span {
        color: #555;
        font-weight: bold;
      }
    }

    h3 {
      font-family: Barlow;
      font-weight: bold;
      font-size: 1.25rem;
    }
    p {
      font-family: Roboto;
      text-align: center;
    }
  }

  span {
    font-family: Barlow;
    font-weight: bold;
    font-size: 1.25rem;
    color: #5c5c5c;
  }

  .types {
    display: flex;
    flex-direction: row;
    font-family: Rubik;
    justify-content: center;
    gap: 0.5rem;

    span {
      color: white;
      text-transform: uppercase;
      font-weight: bold;
      padding: 0.25rem 1rem;
      border-radius: 0.25rem;
    }
  }
`;
