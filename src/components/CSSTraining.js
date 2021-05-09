import React from 'react'
import styled from 'styled-components'
const CSSTraining = () => {
    return (
        <Wrapper>
            <Header>
                <h1>Header</h1>
            </Header>
            <Article>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Unde cumque quo temporibus sapiente vero tempora error quas ma
                iores, tenetur eaque ab labore voluptatum impedit quisquam et, libero,
                     recusandae itaque. Sit.</p>
            </Article>
            <AsideContainer>
                <Aside>
                    <h1>Aside 1</h1>
                </Aside>
                <Aside>
                    <h1>Aside 2</h1>
                </Aside>
                <Aside>
                    <h1>Aside 3</h1>
                </Aside>
            </AsideContainer>

            <Footer>
                <h1>Footer</h1>
            </Footer>
        </Wrapper>
    )
}

export default CSSTraining
const Aside = styled.aside`
`
const AsideContainer = styled.div`
${Aside}:nth-child(1) {
background: gold;
}
${Aside}:nth-child(2) {
background: pink;
}
${Aside}:nth-child(3) {
background: pink;
}
`
const Footer = styled.footer`
background: lightgreen;
height: 80px;
`

const Article = styled.article`
text-align: left;
background: deepskyblue;
height: 300px;

font-size: 24px;
`
const Header = styled.header`
background: tomato;
height: 120px;

`
const Wrapper = styled.div`
display: flex;
flex-flow: row wrap;
text-align: center;
padding: 10px;
margin: 10px;
flex: 1 100%;
border-radius: 10px;
`