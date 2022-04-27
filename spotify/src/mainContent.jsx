import React from 'react'
import styled from 'styled-components';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import rsImage from '../src/Spotify-DiscoverThis-Final.jpg'
const MainContent = () => {
  return (
    
    <BodyContent>
            <Content1>
                <Container>
                  <Part1>
                  <LeftSide>
                  <Header>SPOTIFY PREMIUM</Header>
                  <Highlights>Get 3 months of Premium for free</Highlights>
                  <Description>Enjoy ad-free music listening, offline playback, and more. Cancel anytime.</Description>
                  <Button1>Get 3 months free</Button1>
                  <TnC>Individual plan only. ₹119/month after. Terms and conditions apply. Open only to users who haven't already tried Premium. Offer ends 12 May 2022.</TnC>
                  </LeftSide>
                  <RightSide>
                    <img src={rsImage} alt="" />
                  </RightSide>
                  </Part1>
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
  height:540px;
  background-color: #993399;
  color:white;
  padding:72px;
`;
const Part1 = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
const Header = styled.span`
  font-size:16px;
  font-weight:600;
  margin:16px 0 32px;
`;
const Highlights = styled.p`
font-size:60px;
font-weight:650;

`;
const Description = styled.p`
font-size:24px;
margin:30px 0 0 0;
width:80%;
`;
const TnC = styled.p`
  margin-top:40px;
  font-size:12px;
  width:80%;
`;
const LeftSide = styled.div`
  flex:2;
`; 
const RightSide = styled.div`
  flex:1;
  img{
    width:100%;
  }
`;  
const Content2 = styled.div`
  height:600px;
  background-color: #2941ab;
`;
const Button1 = styled.button`
background-color:black;
color:white;
margin-top:35px;
border-radius: 50px;
border: 2px solid black;
font-size:14px;
font-weight:650;
text-transform:uppercase;
  /* margin: 0.5em 1em; */
  padding: 14px 32px;
  cursor:pointer;
  transition:all 0.2s ease-in-out;
:hover{
  transform: scale(1.04)
}
`;
