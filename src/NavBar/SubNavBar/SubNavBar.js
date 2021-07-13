import React, {useState, useContext} from "react";
import {NavigationBurger} from "../NavigationBurger";
import {Divider} from "../Divider";
import {Element} from "./Element";
import {ColorIndicator} from "./ColorIndicator";
import HamburgerNav from "../HamburgerNav/HamburgerNav";


const SubNavBar = (props) =>{

    const [currentInformation]= useState("overview")


    return(
        <>
            <HamburgerNav/>
            <NavigationBurger navType="subNavigation" >
                <Element onClick={()=>props.planetDetail("overview")}>
                    Overview
                    {props.userDecision === "overview" && (<ColorIndicator active={currentInformation}/>)}
                </Element>
                <Element onClick={()=>props.planetDetail("structure")} >
                    Structure
                    {props.userDecision === "structure" && (<ColorIndicator active={currentInformation}/>)}
                </Element>

                <Element onClick={()=>props.planetDetail("surface")} >
                    Surface
                    {props.userDecision === "surface" && (<ColorIndicator active={currentInformation}/>)}
                </Element>
            </NavigationBurger>
            <Divider/>
        </>
    )
}

export default SubNavBar;