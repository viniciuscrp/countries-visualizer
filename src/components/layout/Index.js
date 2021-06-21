import React from 'react';
import Header from './Header';
import { Container, Page } from './style';

export default function Layout({children}) {
  return <Container>
    <Header></Header>
    <Page>
      {children}
    </Page>
  </Container>
}