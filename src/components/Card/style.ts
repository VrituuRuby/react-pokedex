import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.5rem;
  aspect-ratio: 5/7;
  flex: 1 1 200px;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.1);
  }

  font-family: Rubik;
  display: flex;
  color: white;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #1d1d1d;

  img {
    width: 100%;
    border-radius: 0.5rem;
    background-color: rgba(255, 255, 255, 0.05);
    -webkit-filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.3));
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
      display: flex;
      align-items: center;
      font-weight: bold;
      justify-content: center;
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
    }
  }
`;
