import React from "react";
import SubNavBar from "../NavBar/SubNavBar/SubNavBar";
import Dots from "../Dots";
import {Divider} from "../NavBar/Divider";
import {SidebarStyles} from "./SidebarStyles";
import HamburgerNav from "../NavBar/HamburgerNav/HamburgerNav";

const ConditionalSidebar = (props) => {
    const isSideBarActive = () =>{
        if (props.isSidebarOpen) {
            return (<SidebarStyles>
                <HamburgerNav/>
                <Dots/>
                <Divider/>
            </SidebarStyles>)
        }
    }
    return(<>
            {isSideBarActive()}
    </>

    );
}

export default ConditionalSidebar;