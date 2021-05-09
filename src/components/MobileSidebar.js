import React from 'react'
import styled from 'styled-components'
// import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import { FaTimes } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
const MobileSidebar = ({isOpen, toggle}) => {
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
        <MobileSidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {menuItems.map((item) => (
                        <SidebarLink to={item} onClick={toggle}>
                            {item}
                        </SidebarLink>
                    ))}

                </SidebarMenu>
            </SidebarWrapper>
        </MobileSidebarContainer>
    )
}

export default MobileSidebar
const SidebarLink = styled(LinkScroll)`
margin-bottom: 22px;
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: white;
cursor: pointer;
:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
}
`
const SidebarMenu = styled.div``
const SidebarWrapper = styled.div``
const MobileSidebarContainer = styled.aside`
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #0d0d0d;
display: grid;
align-items: center;
top: 0;
left: 0;
transition: 0.3s ease-in-out;
opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`
const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
`
export const CloseIcon = styled(FaTimes)`
color: #fff;
`
