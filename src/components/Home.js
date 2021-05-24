import React from 'react'
import styled from 'styled-components'
import Section from './Section'

import Fade from 'react-reveal/Fade';
function Home() {
    return (
        <Container>

            <Section
                title="Model S"
                description="Order Online For Touchless Delievery"
                lftBtntext="Custom Order"
                backgroundImg="model-s.jpg"
                rghtBtntext="Existing Inventory"
            />


            <Section
                title="Model Y"
                backgroundImg="model-y.jpg"
                description="Order Online For Touchless Delievery"
                lftBtntext="Custom Order"
                rghtBtntext="Existing Inventory" />
            <Section
                title="Model 3"
                backgroundImg="model-3.jpg"
                description="Order Online For Touchless Delievery"
                lftBtntext="Custom Order"
                rghtBtntext="Existing Inventory"
            />
            <Section
                title="Model X"
                backgroundImg="model-x.jpg"
                description="Order Online For Touchless Delievery"
                lftBtntext="Custom Order"
                rghtBtntext="Existing Inventory"
            />
            <Section
                title="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                description="Money-back gaurantee"
                lftBtntext="Order Now"
                rghtBtntext="Learn More"
            />
            <Section
                title="Solar For New roofs"
                backgroundImg="solar-roof.jpg"
                description="Solar Roof Costs Less Than a New Roof Plus Solar Panel "
                lftBtntext="Order Now"
                rghtBtntext="Learn More"
            />
            <Section
                title="Accessories"
                backgroundImg="accessories.jpg"
                description=""
                lftBtntext="Shop Now"

            />
        </Container>

    )
}



export default Home


const Container = styled.div`
height:100vh;

`