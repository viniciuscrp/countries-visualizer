import React from 'react';
import styled from 'styled-components';

export default function Dropdown() {
  const Container = styled.div`
    width: 15%;
    height: 100%;
    color: #c9c9c9;
    background-color: #FFF;
    border-radius: 10px;
    display: flex;
    align-items: center;
  `;

  const Select = styled.select`
    background-color: #FFF;
    width: 100%;
    height: 80%;
    border: none;
    cursor: pointer;
    -webkit-appearance: none;
    padding-left: 10%;
    &:focus {
      outline: none;
    }
  `

  return <Container>
    <Select defaultValue="">
      <option hidden value="">Filter by Region</option>
      <option>Africa</option>
      <option>America</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </Select>
  </Container>
}
