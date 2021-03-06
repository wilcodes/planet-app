import React, {useState} from "react";
import SubNavBar from "../NavBar/SubNavBar/SubNavBar";
import Dots from "../Dots";
import MainSection from "../MainSection/MainSection";
import PlanetSubDetails from "../PlanetSubDetails/PlanetSubDetails";
import {venus} from "../planetsData/planetsData";

const Venus = () =>{
    const [planetDetails, setPlanetDetails]= useState('overview');

    return(
        <>
            < Dots />
            <SubNavBar
                planetDetail={(planetD)=>setPlanetDetails(planetD)}
                userDecision={planetDetails}
                currentPlanet={"venus"}
                planetColor={venus.color}
            />
            <MainSection planetDetail={planetDetails}
                         currentPlanet={"venus"}
                         planet={venus}
                         planetDetails={(planetD)=>setPlanetDetails(planetD)}
            />
            <PlanetSubDetails planet={venus}/>

        </>
    )
}

export default Venus;
