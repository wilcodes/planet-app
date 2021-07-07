import React, {useState} from "react";
import {Burger} from "./Burger";
import {NavigationBurger} from "../NavigationBurger";
import {NavTitle} from "./NavTitle";
import {Divider} from "../Divider";

const HamburgerNav = ()=>{

    const [isBurgerOpen, setIsBurgerOpen]= useState(false);
    return(
        <>
            <NavigationBurger>
                <NavTitle>THE PLANETS</NavTitle>
                <Burger open={isBurgerOpen} onClick={()=> setIsBurgerOpen(!isBurgerOpen)}>
                    <div />
                    <div />
                    <div />
                </Burger>
            </NavigationBurger>
            <Divider/>
        </>


    )
}

export default HamburgerNav;