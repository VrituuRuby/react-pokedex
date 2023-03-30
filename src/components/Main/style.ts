import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 1rem;
  flex: 1 1 0;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
