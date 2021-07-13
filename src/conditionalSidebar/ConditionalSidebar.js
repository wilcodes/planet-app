import React from "react";
import Dots from "../Dots";
import {Divider} from "../NavBar/Divider";
import {SidebarStyles} from "./SidebarStyles";
import {NavTitle} from "../NavBar/HamburgerNav/NavTitle";


const ConditionalSidebar = (props) => (
        <>
            <SidebarStyles isModalOpen={props.isModalOpen}>
                <NavTitle style={{marginLeft:"1em"}}>THE PLANETS</NavTitle>
                <Dots/>
                <Divider/>
            </SidebarStyles>
    </>
    )


export default ConditionalSidebar;