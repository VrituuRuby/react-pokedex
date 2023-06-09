import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #1d1d1d;
  border-radius: 0.5rem;
  gap: 0.5rem;
  padding: 1rem;
  flex: 1 2 0;

  border: 1px solid rgba(255, 255, 255, 0.17);

  button.close-button {
    display: none;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    margin: 0.5rem;
    padding: 1rem;
    background: 0;
    border: 0;
    color: white;
    border-radius: 999px;
    &:hover,
    &:active {
      background-color: #333;
    }
  }

  @media (max-width: 900px) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.2);
    height: 100%;
    border: 0;
    border-radius: 0;
    animation: appear 0.1s linear;

    button.close-button {
      display: flex;
      z-index: 1;
    }

    @keyframes appear {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Loader = styled.div`
  display: flex;
  min-width: 0;
  flex: 1 0 0;
  align-items: center;
  justify-content: center;
  color: white;
  width: 100%;
  height: 100%;

  svg {
    animation: rotate infinite 0.5s ease-out;
    width: 100%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  gap: 0.5rem;
  width: 100%;
  flex: 2 1 0;
  min-height: 0;
  overflow: hidden;

  img {
    -webkit-filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.8));
    flex: 1 1 0;
    min-height: 20vmin;
  }

  span {
    text-transform: uppercase;
    font-family: "Barlow";
    font-weight: bold;
    font-size: 1.25rem;
    color: #5c5c5c;
  }

  div {
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
    white-space: normal;
    font-family: "Roboto", sans-serif;
    text-align: center;
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
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 0.5rem;

    span {
      font-size: 1rem;
      text-align: center;
      font-family: Rubik;
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
  width: 100%;
  align-items: center;
  flex: 1 2 0;
  min-height: 0;

  h3 {
    color: white;
    font-family: Barlow;
    font-weight: bold;
    font-size: 1.25rem;
  }

  div {
    display: flex;
    min-height: 0;
    overflow-y: scroll;
    overflow-x: hidden;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: #555;
      border-radius: 999px;
      &:hover {
        background-color: #888;
      }
    }

    button {
      padding: 1rem;
      display: flex;
      flex: 1;
      border: 0;
      background: none;
      cursor: pointer;
      border-radius: 0.5rem;
      height: 100%;
      justify-content: center;
      &:hover {
        background-color: #222;
      }
      img {
        height: 100%;
      }
    }
  }
`;
