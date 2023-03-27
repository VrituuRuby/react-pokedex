import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 2 2 0;

  input {
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #2c2c2c;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
    color: white;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0 auto;
    overflow-y: scroll;
    overflow-x: visible;
    height: 0;
    flex: 1 1 0;
    align-items: center;
    justify-content: center;
  }

  > div::-webkit-scrollbar {
    display: none;
  }

  > div .load-more {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem;

    button {
      padding: 0.5rem 1rem;
      background: #555;
      color: white;
      font-family: Rubik;
      font-weight: bold;
      font-size: 1.5rem;
      border: 0;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;
