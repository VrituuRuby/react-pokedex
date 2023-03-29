import styled from "styled-components";

export const Container = styled.button`
  font-family: Rubik;
  display: flex;
  color: white;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #1d1d1d;
  border-radius: 0.5rem;
  flex: 1 1 200px;
  aspect-ratio: 5/7;
  max-width: 300px;
  cursor: pointer;
  border: 0;

  transition: filter, background-color, box-shadow, 0.2s;
  &:hover {
    background-color: #222;
    box-shadow: 0 0 5px 2px rgba(255, 255, 255, 0.3);
  }
  border: 1px solid rgba(255, 255, 255, 0.17);

  &:active {
    outline: 0;
    background-color: #333;
  }

  img {
    width: 100%;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.05);
    -webkit-filter: drop-shadow(0px 1px 15px rgba(0, 0, 0, 1));
  }

  strong {
    font-family: Rubik;
    color: #555;
    font-size: 1rem;
  }

  span.name {
    text-transform: capitalize;
    font-family: Rubik;
    font-weight: bold;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: bold;

    span {
      font-size: 1rem;
      display: flex;
      align-items: center;
      font-weight: bold;
      justify-content: center;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    }
  }
`;
