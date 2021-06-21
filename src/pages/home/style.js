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

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  border: 1px solid red;
`;

export { Container, Cards, Card }