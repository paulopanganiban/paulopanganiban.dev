import React, { useState } from 'react'
import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../images/c.png'
const MobileNav = ({ menuItems, toggle }) => {
    return (
        <MobileNavContainer>
            <Avatar src={Logo}>
            </Avatar>
            <Content>
                {/* {menuItems?.map((item) => (
                    <li>{item}</li>
                )
                )} */}
                <MenuIcon onClick={toggle}/>
            </Content>
        </MobileNavContainer>
        
    )
}

export default MobileNav
const MenuContent = styled.div`

`
const Avatar = styled.img`
display: flex;
align-items: center;
object-fit: contain;
margin-left: 12px;
padding: 12px;
cursor: pointer;
:hover {
    opacity: 0.8;
}
`
const Content = styled.div`
display: flex;
align-items: center;
margin-right: 12px;
cursor: pointer;
 > .MuiSvgIcon-root {
     font-size: 3rem;
 } 
:hover {
    opacity: 0.8;
}
`
const MobileNavContainer = styled.div`
color:white;
background: #000;
height: 80px;
/* margin-top: -80px; */
display: flex;
justify-content: space-between;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
@media screen and (min-width: 768px) {
    display: none;
}
`