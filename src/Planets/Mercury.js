import React, {useState} from "react";
import SubNavBar from "../NavBar/SubNavBar/SubNavBar";
import Dots from "../Dots";
import MainSection from "../MainSection/MainSection";
import PlanetSubDetails from "../PlanetSubDetails/PlanetSubDetails";
import {mercury} from "../planetsData/planetsData";

const Mercury = () =>{
    const [planetDetails, setPlanetDetails]= useState('overview');

    return(
        <>
            < Dots />
            <SubNavBar
                planetDetail={(planetD)=>setPlanetDetails(planetD)}
                userDecision={planetDetails}
                currentPlanet={"mercury"}
                planetColor={mercury.color}
            />
            <MainSection planetDetail={planetDetails}
                         currentPlanet={"mercury"}
                         planet={mercury}
                         planetDetails={(planetD)=>setPlanetDetails(planetD)}
            />
            <PlanetSubDetails planet={mercury}/>

        </>
    )
}
export default Mercury;
