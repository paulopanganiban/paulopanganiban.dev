import React from 'react'
import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
// import Logo from '../images/svg-paulogo.svg'
import Logo from '../images/whitepnglogo.png'
import { Link as LinkScroll } from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu';
const Header = () => {
    return (
        <>
        <HeaderContainer>
            <HeaderContent>
                <NavbarLogo>
                    45:45 left
                    <img src={Logo} alt="test" />
                </NavbarLogo>
                <MobileIcon>
                    <MenuIcon/>
                </MobileIcon>
                <HeaderMenu>
                    <HeaderItem>
                        <p>Home</p>
                        <p>About</p>
                        <p>Skills</p>
                        <p>Projects</p>
                        <p>Blog</p>
                        <p>Coding Challenges</p>
                        <p>Contact</p>
                        <HeaderLinks to="about">
                            <h3>About</h3>
                    </HeaderLinks>
                    </HeaderItem>
                    <HeaderItem>
                        <HeaderLinks to="discover">
                        <h3>Discover</h3>
                    </HeaderLinks>
                    </HeaderItem>
                    <HeaderItem>
                        <HeaderLinks to="services">
                        <h3>Services</h3>
                    </HeaderLinks>
                    </HeaderItem>
                    <HeaderItem>
                        <HeaderLinks to="signup">
                        <h3>Sign Up</h3>
                    </HeaderLinks>
                    </HeaderItem>
                   <Button>
                      <BtnLink  to="/signin">Sign In</BtnLink>
                   </Button>
                </HeaderMenu>
            
            </HeaderContent>
        </HeaderContainer>
        </>
    )
}

export default Header
const BtnLink = styled(LinkRouter)`
border-radius: 50px;
background: #01bf71;
white-space: nowrap;
padding: 10px 22px;
color: #010606;
font-size: 16px;
outline: none; 
border: none;
cursor: pointer;
transition: all 0.2 ease-in-out;
text-decoration: none;
:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`
const Button = styled.nav`
display: flex;
align-items: center;
color: white;
@media screen and (max-width: 768px) {
    display: none;
}
`
const HeaderItem = styled.li`
height: 80px;`
const HeaderLinks = styled(LinkScroll)`
color: white;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
    border-bottom: 3px solid #01bf71;
}
`
const HeaderMenu = styled.div`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;
/* hide from desktop */
@media screen and (max-width: 768px) {
    display: none;
}
`
const MobileIcon = styled.div`
/* hide from desktop */
display: none;
> .MuiSvgIcon-root {
    color: white;
    font-size: 1.8rem;
}
@media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    /* centers */
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
}
`
const HeaderContent = styled.div`

display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;

`
const NavbarLogo = styled(LinkRouter)`
color: #fff;
display: flex;
justify-self: flex-start;
cursor: pointer;
margin: 15px;
`
const HeaderContainer = styled.nav`
width: 100%;
background: #000;
height: 80px;
/* margin-top: -80px; */
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition: 0.8s all ease;
}
`