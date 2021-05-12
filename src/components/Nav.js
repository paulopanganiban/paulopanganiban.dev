import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MyPic from '../images/washout.jpg'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'
import MobileNav from './MobileNav'
const Nav = ({ toggle, menuItems, name }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const toggleHome = () => {
        scroll.scrollToTop()
    }
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    return (
        <>
            <MobileNav menuItems={menuItems} toggle={toggle} />
            <NavContainer scrollNav={scrollNav}>
                <Sidebar>
                    <SidebarContainer>
                        <SidebarHeader>
                            <SidebarTop>
                                <Avatar src={MyPic} alt="zz" onClick={toggleHome}
                                />
                                <h3>{name}</h3>
                                <p>Available for wait</p>
                            </SidebarTop>
                            <SidebarBottom>
                                {menuItems.map((item) => (
                                    <NavLink to={item}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}>
                                        {item}
                                    </NavLink>
                                ))}
                            </SidebarBottom>
                        </SidebarHeader>
                    </SidebarContainer>
                </Sidebar>
            </NavContainer>
        </>
    )
}

export default Nav
// styled(LinkScroll)
const NavLink = styled(LinkScroll)`
margin-top: 8px;
margin-bottom: 8px;
list-style-type: none;
font-size: 22px;
cursor: pointer;
:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
}

`
const SidebarBottom = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
const SidebarTop = styled.div`
display: flex;
flex-direction: column;
align-items: center;
> p {
    color: #8a8a8a;
    display: block;
    line-height: 100%;
    margin-bottom: 0;
    margin-top: 9px;
}
`
const Avatar = styled.img`
/* vertical-align: middle; */
border: 5px solid gray;
border-radius: 50%;
width: 110px;
margin-bottom: 16px;
cursor: pointer;
`
const SidebarHeader = styled.div`
color: white;
`
const SidebarContainer = styled.div`

> p {
    color: white;
}
`
const Sidebar = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
background-color: #111;
width: inherit;
height: inherit;
max-width: inherit;
max-height: inherit;
`

const NavContainer = styled.div`
height: 100%;
left: 0;
position: fixed;
top: 0;
width: 235px;
z-index: 999;
@media screen and (max-width: 767px) {
    transition: 0.8s all ease;
    display: none;
}
`