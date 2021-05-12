import { Button } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
const About = ({ lightBg, id, imgStart, 
    topLine, lightText, darkText,
    description, headline, buttonLabel, img, alt, primary, dark, dark2 }) => {
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <Subtitle darkText={darkText}>
                                    {description}
                                </Subtitle>
                                <BtnWrap>
                                    <Button to="home"
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About
const Img = styled.img`
object-fit: contain;
width: 50px;
height: 100%;
`
const ImgWrap = styled.div`
display: flex;
height: 100%;
`
const BtnWrap = styled.div`
display: flex;
justify-content: flex-start;
`
const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`
const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
@media screen and (max-width: 480px) {
    font-size: 32px;
}
`
const TopLine = styled.p`
color: #01bf71;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`
const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;
`
const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`
const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`
const AboutRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
@media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2` : `'col1 col1' 'col2' 'col2'`)};
}
`
const AboutWrapper = styled.div`
display: grid;
z-index: 1;
height: 860px;
width: 100%;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0;
justify-content: center;
`
const AboutContainer = styled.div`
color: #fff;
background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
@media screen and (min-width: 768px) {
    margin-left: 235px;
}

`
