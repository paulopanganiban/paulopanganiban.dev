import React from 'react'
import styled from 'styled-components'
const Nav = () => {
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
                            <Avatar />
                            <p>im an image</p>
                            <span>John Paulo Panganiban</span>
                            <p>Available for work</p>
                        </SidebarTop>
                        <SidebarBottom>
                            <div>
                                {menuItems.map((item) => (
                                    <NavLink>
                                        {item}
                                    </NavLink>
                                ))}
                            </div>

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
`
const SidebarTop = styled.div``
const Avatar = styled.img`
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