import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import Bg from '../images/herobhg.jpg'
const Hero = () => {


    return (
        <HeroContainer>
            <HeroBg>
                <HeroImg src={Bg} />
            </HeroBg>
            <HeroContent>
                <h1>1:25:11 </h1>
                <h3>John Paulo Panganiban</h3>
                <h1>Website and user interface designer</h1>
                <p>I code and workout</p>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
const HeroContent = styled.div`

`
const HeroImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
background: #232a34;
`
const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
margin-left: 235px;
@media screen and (max-width: 768px) {
    margin-left: 0;
}
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`