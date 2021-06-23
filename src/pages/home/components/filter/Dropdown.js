import React from 'react';

import { Select, SelectContainer } from './style';

export default function Dropdown() {

  return <SelectContainer>
    <Select defaultValue="">
      <option hidden value="">Filter by Region</option>
      <option>Africa</option>
      <option>America</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </Select>
  </SelectContainer>
}
