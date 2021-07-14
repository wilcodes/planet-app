import React, {useState} from "react";
import SubNavBar from "../NavBar/SubNavBar/SubNavBar";
import Dots from "../Dots";
import MainSection from "../MainSection/MainSection";
import PlanetSubDetails from "../PlanetSubDetails/PlanetSubDetails";
import {saturn} from "../planetsData/planetsData";

const Saturn = () =>{
    const [planetDetails, setPlanetDetails]= useState('overview');

    return(
        <>
            < Dots />
            <SubNavBar
                planetDetail={(planetD)=>setPlanetDetails(planetD)}
                userDecision={planetDetails}
                currentPlanet={"saturn"}

            />
            <MainSection planetDetail={planetDetails} currentPlanet={"saturn"} planet={saturn}/>
            <PlanetSubDetails/>

        </>
    )
}

export default Saturn;
