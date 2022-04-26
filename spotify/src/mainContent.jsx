import React from 'react'
import styled from 'styled-components';
import Container from '@mui/material/Container';

const MainContent = () => {
  return (
    
    <BodyContent>
            <Content1>
                <Container>

                </Container>
            </Content1>
            <Content2>
                <Container>

                </Container>
            </Content2>
    </BodyContent>
    
  )
}

export default MainContent

const BodyContent = styled.div`
  /* padding:0 100px; */

`;

const Content1 = styled.div`
  height:635px;
  background-color: #993399;
`;
const Content2 = styled.div`
  height:600px;
  background-color: #2941ab;
`;