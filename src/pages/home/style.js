import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 22% [col-start]);
  grid-column-gap: 4%;
  grid-row-gap: 4rem;
`;

export { Container, Cards }