import styled from "styled-components";

export const DexEntry = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  h3 {
    font-family: Barlow;
    font-weight: bold;
    font-size: 1.25rem;
  }
  p {
    font-family: Roboto;
    text-align: center;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1d1d1d;
  border-radius: 0.5rem;
  padding: 1rem;
  gap: 1rem;
  flex: 1 1 0;

  span {
    font-family: Barlow;
    font-weight: bold;
    font-size: 1.25rem;
    color: #5c5c5c;
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 0.5rem;
  width: 100%;
  flex: 1 1 0;

  img {
    height: 25vmin;
    -webkit-filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.8));
  }

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

      text-transform: capitalize;
    }

    span {
      font-family: Rubik;
      color: #555;
      font-weight: bold;
      text-transform: uppercase;
    }
  }

  .types {
    display: flex;
    flex-direction: row;
    font-family: Rubik;
    font-weight: extrabold;
    justify-content: center;
    gap: 0.5rem;

    span {
      font-size: 1.5rem;
      font-family: Rubik;
      font-weight: bold;
      color: white;
      text-transform: uppercase;
      padding: 0.25rem 1rem;
      border-radius: 0.25rem;
    }
  }
`;

export const Measure = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  color: white;

  div {
    align-items: center;
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    h3 {
      font-family: Barlow;
      font-weight: bold;
    }

    span {
      font-family: Rubik;
      font-weight: bold;
      font-size: 1.25rem;
      text-align: center;
      color: white;
      padding: 0.25rem 0;
      background: #333;
      border-radius: 999px;
      width: 100%;
    }
  }
`;

export const Weaknesses = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  align-items: center;

  h3 {
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.5rem;

    span {
      text-align: center;
      font-family: Rubik;
      flex: 1 1 0;
      text-transform: uppercase;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-weight: bold;
      color: white;
    }
  }
`;

export const Evolution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  flex: 1 1 0;

  h3 {
    color: white;
    font-family: Barlow;
    font-weight: bold;
    font-size: 1.25rem;
  }

  div {
    width: 100%;
    height: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex: 1 1 0;
    svg {
      color: white;
    }

    img {
      flex: 1 1 0;
      height: 100px;
      border-radius: 100%;
    }
  }
`;
