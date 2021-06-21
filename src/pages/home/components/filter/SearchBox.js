import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';


export default function SearchBox() {
  const Container = styled.div`
    width: 33%;
    height: 100%;
    color: #c9c9c9;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    background-color: #FFF;
  `;

  const Input = styled.input`
    margin-left: 1rem;
    flex: 1;
    background-color: transparent;
    border: none;
    height: 50%;
    &:focus {
      outline: none;
    }
  `;

  const SearchIcon = styled(FaSearch)`
    color: inherit;
    height: 1.5em;
    width: 1.5em;
  `;

  return <Container>
    <SearchIcon></SearchIcon>
    <Input placeholder="Search for a country..."></Input>
  </Container>
}
