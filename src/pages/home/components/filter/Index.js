import React from 'react';

import Dropdown from './Dropdown';
import SearchBox from './SearchBox';
import { Container } from './style';

export default function Filter() {
  return <Container>
    <SearchBox></SearchBox>
    <Dropdown></Dropdown>
  </Container>
}