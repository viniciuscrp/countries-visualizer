import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Container = styled.div`
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;


const SelectContainer = styled.div`
width: 15%;
height: 100%;
color: #c9c9c9;
background-color: var(--white);
border-radius: 10px;
display: flex;
align-items: center;
box-shadow: var(--shadow);
`;

const Select = styled.select`
background-color: var(--white);
width: 100%;
height: 80%;
border: none;
cursor: pointer;
-webkit-appearance: none;
padding-left: 10%;
&:focus {
  outline: none;
};
`;

const SearchBoxContainer = styled.div`
width: 33%;
height: 100%;
color: #c9c9c9;
display: flex;
border-radius: 10px;
align-items: center;
padding: 0px 20px;
background-color: var(--white);
box-shadow: var(--shadow);
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


export { Container, Input, SearchBoxContainer, SearchIcon, Select, SelectContainer };