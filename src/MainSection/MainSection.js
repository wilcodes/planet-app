import React from "react";
import {BoxWrapper} from "./BoxWrapper";
import PlanetImage from "./PlanetImage/PlanetImage";
import PlanetDescription from "./PlanetDescription/PlanetDescription";
const MainSection = () =>{
    return(
        <BoxWrapper>
            <PlanetImage/>
            <PlanetDescription/>
        </BoxWrapper>
    )
}

export default MainSection;