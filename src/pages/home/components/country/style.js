import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  box-shadow: var(--shadow);
  border-radius: 10px;
  cursor: pointer;
`;

const FlagContainer = styled.div`
  width: 100%auto;
  height: 200px;
`;

const Flag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Details = styled.div`
  padding: 25px;
  height: 100%;
  background-color: hsl(var(--white));
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const Name = styled.p`
  font-size: var(--details-text-size);
  font-weight: bold;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const DataTitle = styled.p`
  font-weight: bold;
  margin: 0px 5px 0px 0px;
`;

const DataValue = styled(DataTitle)`
  font-weight: normal;
`;

export { Card, Flag, Details, Name, DataContainer, DataTitle, DataValue, FlagContainer };