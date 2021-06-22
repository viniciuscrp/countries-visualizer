import React from 'react';
import { FaMoon } from 'react-icons/fa';
import styled from 'styled-components';

export default function Header() {
  const Container = styled.div`
    padding: 1em 10em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  `;

  const HeaderTitle = styled.p`
    font-size: 1.8em;
    font-weight: 700;
    color: #000;
    margin: 0;
  `;

  const Theme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 8rem;
  `;

  return <Container>
    <HeaderTitle>Where in the world?</HeaderTitle>
    <Theme>
      <FaMoon></FaMoon>
      <span>Lorem ipsum</span>
    </Theme>
  </Container>
}