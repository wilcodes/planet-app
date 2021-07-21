import React from "react";
import {BoxWrapper, BoxContentWrapper} from "./BoxWrapper";
import PlanetImage from "./PlanetImage/PlanetImage";
import PlanetDescription from "./PlanetDescription/PlanetDescription";
import UserSelection from "./UserSelection.js/UserSelection";
const MainSection = (props) =>{
    return(
        <BoxWrapper  >
            <PlanetImage planetDetail={props.planetDetail} currentPlanet={props.currentPlanet} planet={props.planet} />
            <BoxContentWrapper  >
                <PlanetDescription planetDetail={props.planetDetail} currentPlanet={props.currentPlanet} planet={props.planet}/>
                <UserSelection planetDetail={props.planetDetails} userSelection={props.planetDetail} planet={props.planet}/>
            </BoxContentWrapper>

        </BoxWrapper>
    )
}

export default MainSection;