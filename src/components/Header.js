import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components'
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from "../features/car/carSlice"
import { useSelector } from 'react-redux'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)
    const cars = useSelector(selectCars)
    return (

        <Container>
            <a>
                <img src="/images/logo.svg" alt="" />
            </a>
            <Menu>{cars && cars.map((car, index) =>
                (<p><a key="index" href="#">{car}</a></p>)
            )}
                {/* <p><a href="#">Model S</a></p>
                <p><a href="#">Model Y</a></p>
                <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
                <p><a href="#">Model S</a></p> */}
            </Menu>
            <Rightmenu>
                <a href="#">SHOP</a>
                <a href="#">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />

            </Rightmenu>
            <Burgernav show={burgerStatus}>
                <CloseWrapper>
                    <Customclose onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>

                <li><a hre="#">Existing Inventory</a></li>
                <li><a hre="#">Used Inventory</a></li>
                <li><a hre="#">Trade-In</a></li>
                <li><a hre="#">CyberTruck</a></li>
                <li><a hre="#">Roadster</a></li>
                <li><a hre="#">About</a></li>
                <li><a hre="#">Elon Musk</a></li>
                <li><a hre="#">Model S</a></li>
                <li><a hre="#">Model X</a></li>
                <li><a hre="#">Model 3</a></li>
                <li><a hre="#">Model Y</a></li>
            </Burgernav>

        </Container>

    )
}

export default Header

const Container = styled.div`
min-height: 60px;
top:0;
left:0;
right:0;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
z-index:1;
`

const Menu = styled.div`
display: flex;
align-items: center;
justify-content:center;
flex:1 ;
a{
    font-weight: bold;
    text-transform: uppercase;
    padding: 0 10px;
}

@media(max-width: 768px){
    display: none;
}
`

const Rightmenu = styled.div`
display: flex;
align-items: center;
a{
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 8px;
}
`

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`
const Burgernav = styled.div`
position:fixed;
top: 0;
bottom: 0;
right: 0;
background-color: white;
width:300px;
z-index: 16;
list-style: none;
padding:20px;
text-align: start;
transform:${props => props.show ? `translateX(0)` : 'translateX(100%)'};
transition:transform 0.44s ease-in-out;
li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
    a{
        font-weight: 600;
    }
}

`
const Customclose = styled(CloseIcon)`
cursor: pointer;
`

const CloseWrapper = styled.div`
display: flex;
justify-content:flex-end;
`