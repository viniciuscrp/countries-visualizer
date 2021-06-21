import React from 'react';

import Filter from './components/filter/Index';
import { Container, Cards, Card } from './style';

export default function Index() {
  return <Container>
    <Filter></Filter>
    <Cards>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Cards>
  </Container>
}