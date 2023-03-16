import styled from "styled-components";

export const Container = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.25rem;
  align-items: center;

  transition: width 0.2s;

  padding: 1rem;

  font-family: Rubik;
  color: white;

  background-color: #1d1d1d;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: 0.5rem;

  img {
    width: 100%;
    border-radius: 0.5rem;
  }

  strong {
    color: #555;
    font-size: 1rem;
  }

  span.name {
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
