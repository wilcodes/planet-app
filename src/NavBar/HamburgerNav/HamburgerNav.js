import React, {useState} from "react";
import {Burger} from "./Burger";
import {NavigationBurger} from "../NavigationBurger";
import {NavTitle} from "./NavTitle";
import {Divider} from "../Divider";
import ConditionalSidebar from "../../conditionalSidebar/ConditionalSidebar";
import PlanetsNav from "../PlanetsNav/PlanetsNav";
import BigScreenNav from "../BigScreenNav/BigScreenNav";
const HamburgerNav = (props)=>{

    const [isBurgerOpen, setIsBurgerOpen]= useState(false);

    return(

        <>
            <NavigationBurger active={true}>
                <NavTitle open={isBurgerOpen}>THE PLANETS</NavTitle>
                <Burger open={isBurgerOpen} onClick={()=> setIsBurgerOpen(!isBurgerOpen)} >
                    <div />
                    <div />
                    <div />
                </Burger>
                <BigScreenNav/>
            </NavigationBurger>
            <Divider/>
             <ConditionalSidebar isModalOpen={isBurgerOpen} />
        </>


    )
}

export default HamburgerNav;