import React from 'react';
import { useHistory } from 'react-router-dom';

import { ArrowLeft, Button, Container } from './style';

export default function Index() {
  const history = useHistory();
  
  const navigateBack = () => {
    history.goBack();
  }
  
  return <Container>
    <Button onClick={navigateBack}>
      <ArrowLeft />
      Voltar
    </Button>
  </Container>;
}