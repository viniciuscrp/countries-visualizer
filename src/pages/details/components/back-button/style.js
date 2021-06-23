import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const Container = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 180px;
  height: 100%;
  color: #c9c9c9;
  display: flex;
  border-radius: 10px;
  border: none;
  align-items: center;
  padding: 0px 20px;
  background-color: var(--white);
  box-shadow: var(--shadow);
  color: hsl(var(--very-dark-blue-text));
  cursor: pointer;
  transition: 0.25s;
  &:focus {
    outline: none;
  };
  &:active {
    box-shadow: var(--active-shadow);
    transform: translateY(1px);
  };
  &:hover {
    background-color: #c9c9c9;
    color: var(--white);
  }
`;

const ArrowLeft = styled(FaArrowLeft)`
  margin-right: 5px;
  color: hsl(var(--very-dark-blue-text));
`;

export { ArrowLeft, Button, Container };