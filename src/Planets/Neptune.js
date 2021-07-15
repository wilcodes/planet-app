import React, {useState} from "react";
import SubNavBar from "../NavBar/SubNavBar/SubNavBar";
import Dots from "../Dots";
import MainSection from "../MainSection/MainSection";
import PlanetSubDetails from "../PlanetSubDetails/PlanetSubDetails";
import {neptune} from "../planetsData/planetsData";

const Neptune = () =>{
    const [planetDetails, setPlanetDetails]= useState('overview');

    return(
        <>
            < Dots />
            <SubNavBar
                planetDetail={(planetD)=>setPlanetDetails(planetD)}
                userDecision={planetDetails}
                currentPlanet={"neptune"}
                planetColor={neptune.color}
            />
            <MainSection planetDetail={planetDetails} currentPlanet={"neptune"} planet={neptune}/>
            <PlanetSubDetails planet={neptune}/>

        </>
    )
}

export default Neptune;
