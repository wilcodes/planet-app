import React, {useState} from "react";
import SubNavBar from "../NavBar/SubNavBar/SubNavBar";
import Dots from "../Dots";
import MainSection from "../MainSection/MainSection";
import PlanetSubDetails from "../PlanetSubDetails/PlanetSubDetails";
import {uranus} from "../planetsData/planetsData";

const Uranus = () =>{
    const [planetDetails, setPlanetDetails]= useState('overview');

    return(
        <>
            < Dots />
            <SubNavBar
                planetDetail={(planetD)=>setPlanetDetails(planetD)}
                userDecision={planetDetails}
                currentPlanet={"uranus"}

            />
            <MainSection planetDetail={planetDetails} currentPlanet={"uranus"} planet={uranus}/>
            <PlanetSubDetails/>

        </>
    )
}

export default Uranus;
