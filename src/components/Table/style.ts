import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2.5 0 0;
  gap: 0.5rem;

  input {
    padding: 0.5rem 1rem;
    background-color: #2c2c2c;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
    font-size: 1.25rem;
    font-weight: bold;
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    overflow-y: scroll;
    height: 0;
    flex: 1 1 auto;
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
      border: 0;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`;
