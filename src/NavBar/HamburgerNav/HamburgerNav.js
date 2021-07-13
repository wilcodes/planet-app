import React, {useState} from "react";
import {Burger} from "./Burger";
import {NavigationBurger} from "../NavigationBurger";
import {NavTitle} from "./NavTitle";
import {Divider} from "../Divider";
import ConditionalSidebar from "../../conditionalSidebar/ConditionalSidebar";
const HamburgerNav = (props)=>{

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
             <ConditionalSidebar isModalOpen={isBurgerOpen} />
        </>


    )
}

export default HamburgerNav;