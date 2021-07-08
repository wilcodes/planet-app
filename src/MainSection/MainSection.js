import React from "react";
import {BoxWrapper} from "./BoxWrapper";
import PlanetImage from "./PlanetImage/PlanetImage";
import PlanetDescription from "./PlanetDescription/PlanetDescription";
const MainSection = (props) =>{
    return(
        <BoxWrapper>
            <PlanetImage/>
            <PlanetDescription planetDetail={props.planetDetail}/>
        </BoxWrapper>
    )
}

export default MainSection;