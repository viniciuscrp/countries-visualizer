import React from 'react';
import { FaMoon } from 'react-icons/fa';

import { HeaderContainer, HeaderTheme, HeaderTitle } from './style';

export default function Header() {

  return <HeaderContainer>
    <HeaderTitle>Where in the world?</HeaderTitle>
    <HeaderTheme>
      <FaMoon></FaMoon>
      <span>Lorem ipsum</span>
    </HeaderTheme>
  </HeaderContainer>
}