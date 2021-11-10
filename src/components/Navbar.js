import React from 'react'
import logo from '../assets/images/logo.png'
import styled from 'styled-components'

const NavbarContainer = styled.nav`
    display: flex;
    align-items: center;
    margin: 0vw 0 0 5vw;
`
const Brand = styled.div`
    display: flex;
`
const Logo = styled.img`
    height: 10.5vw;
`
const NavMenu = styled.ul`
   list-style-type: none;
`
const NavLink = styled.a`
    position: relative;
    text-decoration: none;
    color: #F0f0a0;
    letter-spacing: 0.5px;
    padding: 0 10px;
    &:after {
        content: "";
        position: absolute;
        background-color: black;
        height: 3px;
        width: 0%;
        left: 0;
        bottom: -10px;
        transition: 0.3s;
    }
    &:hover{
        color: white;
    }
    &:hover:after {
        width: 100%;
    }
`
const Navbar = () => {
    return (
        <NavbarContainer>
            <Brand>
                <Logo src={logo} alt="" />
            </Brand>
            <NavMenu>
                <NavLink href="/">HOME</NavLink>
                <NavLink href="/">SHOP</NavLink>
                <NavLink href="/">CONTACT</NavLink>
            </NavMenu>
        </NavbarContainer>
    )
}

export default Navbar
