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
                <h3>John Paulo Panganiban</h3>
                <h1>Website and user interface designer</h1>
                <p><strong>I just fucking love to code.</strong></p>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
> h1, h3, p {
    color: white;
}
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
:before {
    /* apply dark shit or overlay sa img*/
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
        180deg,
        rgba(0,0,0,0.2) 0%,
        rgba(0,0,0,0.6) 100%
    ),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index: 2;
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