import React from 'react';

import { Card, DataContainer, DataTitle, DataValue, Details, Flag, FlagContainer, Name } from './style';

export default function Country(props) {
  return <Card onClick={props.onClick}>
    <FlagContainer>
      <Flag src={props.flag}></Flag>
    </FlagContainer>
    <Details>
      <Name>{props.name}</Name>
      <DataContainer>
        <DataTitle>Population: </DataTitle>
        <DataValue>{props.population}</DataValue>
      </DataContainer>
      <DataContainer>
        <DataTitle>Region: </DataTitle>
        <DataValue>{props.region}</DataValue>
      </DataContainer>
      <DataContainer>
        <DataTitle>Capital: </DataTitle>
        <DataValue>{props.capital}</DataValue>
      </DataContainer>
    </Details>
  </Card>
}