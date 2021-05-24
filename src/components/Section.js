import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title,
    backgroundImg,
    description,
    lftBtntext,
    rghtBtntext }) {
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom>
                <Itemtext>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </Itemtext>
                <Buttons>
                    <ButtonGroup>
                        <LeftButton>{lftBtntext}</LeftButton>
                        {
                            rghtBtntext && <RightButton> {rghtBtntext}</RightButton>

                        }
                    </ButtonGroup>
                    <DownArrow >
                        <img src="/images/down-arrow.svg" alt="" />
                    </DownArrow>
                </Buttons>


            </Fade>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`

width: 100vw;
height: 100vh;
background-size: cover;
background-repeat: no-repeat;
background-position: center;

background-image: ${props => `url("/images/${props.bgImage}")`};
display: flex;
flex-direction: column;
justify-content:space-between;
align-items:center;



`
const Itemtext = styled.div`

padding-top: 15vh ;
text-align: center
`

const ButtonGroup = styled.div`
display: flex;
margin-bottom: 30px;

@media (max-width:768px){
    flex-direction: column;
}

`

const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color: #fff;
display: flex;
justify-content:center;
align-items: center;
border-radius: 100px;
opacity:0.85;
text-transform: uppercase;
font-size:12px;
cursor:pointer;
margin: 10px;
`

const RightButton = styled(LeftButton)`
background-color:rgba(23,6,82,0.8);
`
const DownArrow = styled.div`
margin-top:20px;
animation:animateDown infinite 1.5s;

img{
    height:40px;
}

`

const Buttons = styled.div`

`