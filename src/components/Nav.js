import React from 'react'
import styled from 'styled-components'
import MyPic from '../images/washout.jpg'
const Nav = () => {
    const name = 'John Paulo Panganiban'
    const menuItems = [
        'Home',
        'About',
        'Skills',
        'Projects',
        'Coding Challenges',
        'Blog',
        'Contact'
    ]
    return (
        <NavContainer>
            <Sidebar>
                <SidebarContainer>
                    <SidebarHeader>
                        <SidebarTop>
                            <Avatar src={MyPic} alt="zz" />

                            <h3>{name}</h3>
                            <p>Available for work</p>
                        </SidebarTop>
                        <SidebarBottom>
                            {menuItems.map((item) => (
                                <NavLink>
                                    {item}
                                </NavLink>
                            ))}
                        </SidebarBottom>
                    </SidebarHeader>
                </SidebarContainer>
            </Sidebar>
        </NavContainer>
    )
}

export default Nav
const NavLink = styled.li`
`
const SidebarBottom = styled.div`
display: flex;
align-items: center;
flex-direction: column;
> li {
margin-top: 8px;
margin-bottom: 8px;
list-style-type: none;
font-size: 22px;
cursor: pointer;
}
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
`