import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import LogoOne from '../images/svg-paulogo.svg'
import LogoTwo from '../images/slack-new-logo.svg'
import LogoThree from '../images/3rd.png'
const Hero = () => {

    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
    }
    return (
        <HeroContainer>
            <Content>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >Welcome to Space</motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >Journey to the unknown</motion.p>
                    <Button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{
                            scale: 0.95,
                            color: 'black',
                            backgroundColor: 'white'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1.5 } }}
                    >Get Started</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Image src={LogoOne} alt="zz"
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                    />
                    <Image src={LogoTwo} alt="zz"
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} />
                    <Image src={LogoThree} alt="zz"
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }} />
                </ColumnRight>
            </Content>
        </HeroContainer>
    )
}

export default Hero
const Image = styled(motion.img)`
position: absolute;
width: 100%;
height: 100%;
max-width: 250px;
max-height: 250px;
`

const ColumnRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;

${Image}:nth-child(1) {
top: -100px;
left: 10px;
}
${Image}:nth-child(2) {
max-width: 150px;
top: 150px;
left: 10px;
}
${Image}:nth-child(3) {
top: 350px;
left: 70px;
}
`
const Button = styled(motion.button)`
color: white;
padding: 1rem 3rem;
font-size: 1rem;
border: 2px solid white;
border-radius: 4px;
outline: none;
cursor: pointer;
background: transparent;
:hover {
    opacity: 0.8;
}
`

const ColumnLeft = styled.div`
display: flex;
color: white;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;

> h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
}
> p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
}
`

const HeroContainer = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #131313;
`

const Content = styled.div`
color: white;
display: grid;
grid-template-columns: 1fr 1fr;
padding: 3rem calc((100vw - 1300px)/2);

@media screen and (max-width: 768px) {
grid-template-columns: 1fr;
}
`