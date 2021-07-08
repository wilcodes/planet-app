import React, {useState, useContext} from "react";
import {NavigationBurger} from "../NavigationBurger";
import {Divider} from "../Divider";
import {Element} from "./Element";
import {ColorIndicator} from "./ColorIndicator";



const SubNavBar = (props) =>{

    const [currentInformation, setCurrentInformation]= useState("overview")


    return(
        <>
            <NavigationBurger navType="subNavigation" >
                <Element onClick={()=>props.planetDetail("overview")}>
                    Overview
                    <ColorIndicator/>
                </Element>
                <Element onClick={()=>props.planetDetail("structure")} >
                    Structure
                </Element>
                <Element onClick={()=>props.planetDetail("surface")} >
                    Surface
                </Element>
            </NavigationBurger>
            <Divider/>
        </>
    )
}

export default SubNavBar;