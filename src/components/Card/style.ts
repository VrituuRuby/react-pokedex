import styled from "styled-components";

interface IContainer {
  // mousePos: {
  //   x: number;
  //   y: number;
  // };
}

export const Container = styled.div`
  flex: 1 1 0;
  border-radius: 0.5rem;
  aspect-ratio: 5/7;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.3);
  }

  > .content {
    z-index: 2;
    margin: 1px;
    display: flex;
    font-family: Rubik;
    color: white;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: inherit;
    padding: 1rem;
    background-color: #1d1d1d;
    width: calc(100% - 2px);
    height: calc(100% - 2px);

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
  }
`;
