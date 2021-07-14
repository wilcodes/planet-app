import React, {useState} from "react";
import SubNavBar from "../NavBar/SubNavBar/SubNavBar";
import Dots from "../Dots";
import MainSection from "../MainSection/MainSection";
import PlanetSubDetails from "../PlanetSubDetails/PlanetSubDetails";
import {jupiter} from "../planetsData/planetsData";

const Jupiter = () =>{
    const [planetDetails, setPlanetDetails]= useState('overview');

    return(
        <>
            < Dots />
            <SubNavBar
                planetDetail={(planetD)=>setPlanetDetails(planetD)}
                userDecision={planetDetails}
                currentPlanet={"jupiter"}

            />
            <MainSection planetDetail={planetDetails} currentPlanet={"jupiter"} planet={jupiter}/>
            <PlanetSubDetails/>

        </>
    )
}

export default Jupiter;
