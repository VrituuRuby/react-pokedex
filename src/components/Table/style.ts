import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 2 1 0;

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
    padding: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    overflow-y: scroll;
    overflow-x: visible;
    justify-content: center;
    align-items: flex-start;
    height: 0;
    flex: 1 1 0;
    width: 100%;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: #111;
      border-radius: 999px;
      &:hover {
        background-color: #333;
      }
    }
    > button:nth-child(1n) {
      animation: appear-up 0.5s ease-in-out;
    }

    > button:nth-child(2n) {
      animation: appear-down 0.5s ease-in-out;
    }

    > button:nth-child(3n) {
      animation: appear-right 0.5s ease-in-out;
    }

    > button:nth-child(4n) {
      animation: appear-left 0.5s ease-in-out;
    }
  }

  @keyframes appear-left {
    0% {
      opacity: 0;
      transform: translateX(-50px);
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes appear-down {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes appear-up {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes appear-right {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
    }
  }

  > div .load-more {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
    padding-bottom: 20rem;

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
      &:hover {
        background-color: #444;
        box-shadow: 0 0 1px 1px rgba(255, 255, 255, 0.3);
      }
      &:active {
        background-color: #777;
      }
    }
  }
`;
