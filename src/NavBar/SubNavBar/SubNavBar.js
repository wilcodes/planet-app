import React from "react";
import {NavigationBurger} from "../NavigationBurger";
import {Divider} from "../Divider";
import {Element} from "./Element";
import {ColorIndicator} from "./ColorIndicator";

const SubNavBar = () =>{
    return(
        <>

            <NavigationBurger navType="subNavigation">
                <Element>
                    Overview
                    <ColorIndicator/>
                </Element>
                <Element>
                    Structure
                </Element>
                <Element>
                    Surface
                </Element>
            </NavigationBurger>

            <Divider/>

        </>
    )
}

export default SubNavBar;