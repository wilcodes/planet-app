import React, {useState} from "react";
import SubNavBar from "../NavBar/SubNavBar/SubNavBar";
import Dots from "../Dots";
import MainSection from "../MainSection/MainSection";
import PlanetSubDetails from "../PlanetSubDetails/PlanetSubDetails";
import {mars} from "../planetsData/planetsData";

const Mars = () =>{
    const [planetDetails, setPlanetDetails]= useState('overview');

    return(
        <>
            < Dots />
            <SubNavBar
                planetDetail={(planetD)=>setPlanetDetails(planetD)}
                userDecision={planetDetails}
                currentPlanet={"mars"}
                planetColor={mars.color}
            />
            <MainSection planetDetail={planetDetails}
                         currentPlanet={"mars"}
                         planet={mars}
                         planetDetails={(planetD)=>setPlanetDetails(planetD)}
            />
            <PlanetSubDetails planet={mars}/>

        </>
    )
}

export default Mars;
