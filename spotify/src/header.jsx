import React from 'react'
import styled from 'styled-components';
import logo from './Spotify_Logo_RGB_White.png'
import Container from '@mui/material/Container';

const Header = () => {
  return (
    
    <Main>
      <Container>
        <Nav>
      <LeftMenu>
      <Img src={logo} alt="" />
      </LeftMenu>
      <MenuBar>
        <NavItem>Premium</NavItem>
        <NavItem>Support</NavItem>
        <NavItem>Download</NavItem>
        <span>|</span>
        <NavItem login>Sign Up</NavItem>
        <NavItem login>Login</NavItem>
      </MenuBar>
      </Nav>
      </Container>
      
    </Main>
    
  )
}

export default Header

const Main = styled.div`
  background-color: #000;
`;
const Nav = styled.div`
width:100%;
height: 55px;
padding:10px;
display: flex;
justify-content:space-between;
align-items:center;

border:2px solid;
flex:1;
/* margin:0 100px; */
`;
const LeftMenu = styled.div`
  flex:3;
  display: flex;
  align-items:center;
 height:100%;
`;


const Img = styled.img`
  height:40px;  
`;
const MenuBar = styled.div`
  flex:2;
  display: flex;
  justify-content: space-between;
  align-items:center;
  span{
    color:white;
    user-select: none;
  }
`;
const NavItem = styled.span`
  color:whitesmoke;
  font-weight:${props => props.login ? 600 : 650};
  cursor:pointer;
  :hover{
    color: #1ed760;
  }
`;