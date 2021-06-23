import React from 'react';

import { Input, SearchBoxContainer, SearchIcon } from './style';

export default function SearchBox() {

  return <SearchBoxContainer>
    <SearchIcon></SearchIcon>
    <Input placeholder="Search for a country..."></Input>
  </SearchBoxContainer>
}
