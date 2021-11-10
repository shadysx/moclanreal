import React from 'react'
import styled from 'styled-components'
import img from '../assets/images/header1.jpg'
import Navbar from './Navbar'

const HeaderContainer = styled.div`

`
const ImageContainer = styled.div`
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    background-image: url(${img});
    filter: grayscale(86%);
`
const TitleContainer = styled.div`
   position: absolute;
   top: 60%;
   left: 5%;
`
const Title1 = styled.h1`
    font-family: 'Gotham Medium';
    font-size: 3.5vw;
    color: white;
`
const Title2 = styled.h2`
    font-family: 'Gotham Medium', cursive;
    font-size: 2vw;
    color: white;
`

const Header = () => {
    return (
        <HeaderContainer>
            <ImageContainer>
                <Navbar /> 
                <TitleContainer>
                    <Title1>MAUVAIS OEIL </Title1>
                    <Title2>WELCOME</Title2>
                </TitleContainer>
            </ImageContainer>
        </HeaderContainer>
   )
}

export default Header
