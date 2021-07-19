import React, {useState} from "react";
import {NavigationBurger} from "../NavigationBurger";
import {Divider} from "../Divider";
import {Element} from "./Element";
import {ColorIndicator} from "./ColorIndicator";
import HamburgerNav from "../HamburgerNav/HamburgerNav";
import PlanetsNav from "../PlanetsNav/PlanetsNav";
const SubNavBar = (props) =>{

    const [currentInformation]= useState("overview")


    return(
        <>
            <HamburgerNav/>
            <PlanetsNav currentInformation={currentInformation}/>
            <NavigationBurger navType="subNavigation" active={false} >
                <Element onClick={()=>props.planetDetail("overview")}>
                    Overview
                    {props.userDecision === "overview" && (<ColorIndicator active={currentInformation} color={props.planetColor}/>)}
                </Element>
                <Element onClick={()=>props.planetDetail("structure")} >
                    Structure
                    {props.userDecision === "structure" && (<ColorIndicator active={currentInformation} color={props.planetColor}/>)}
                </Element>

                <Element onClick={()=>props.planetDetail("surface")} >
                    Surface
                    {props.userDecision === "surface" && (<ColorIndicator active={currentInformation} color={props.planetColor}/>)}
                </Element>
            </NavigationBurger>
            <Divider/>
        </>
    )
}

export default SubNavBar;