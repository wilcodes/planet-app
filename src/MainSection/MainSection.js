import React from "react";
import {BoxWrapper} from "./BoxWrapper";
import PlanetImage from "./PlanetImage/PlanetImage";
import PlanetDescription from "./PlanetDescription/PlanetDescription";
const MainSection = (props) =>{
    return(
        <BoxWrapper>
            <PlanetImage planetDetail={props.planetDetail} currentPlanet={props.currentPlanet} />
            <PlanetDescription planetDetail={props.planetDetail} currentPlanet={props.currentPlanet}/>
        </BoxWrapper>
    )
}

export default MainSection;