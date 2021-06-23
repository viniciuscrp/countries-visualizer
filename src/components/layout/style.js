import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Page = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 40px 30px;
  padding: 0px 160px 50px;
  margin-bottom: 0px;
  background-color: hsl(var(--very-light-gray-bg));
`;

const HeaderContainer = styled.div`
padding: 1em 10em;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
`;

const HeaderTitle = styled.p`
font-size: 1.8em;
font-weight: 700;
color: #000;
margin: 0;
`;

const HeaderTheme = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 8rem;
`;

export { Container, HeaderContainer, HeaderTheme, HeaderTitle, Page };