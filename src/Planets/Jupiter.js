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
                planetColor={jupiter.color}
            />
            <MainSection
                planetDetail={planetDetails}
                currentPlanet={"jupiter"}
                planet={jupiter}
                planetDetails={(planetD)=>setPlanetDetails(planetD)}
            />
            <PlanetSubDetails planet={jupiter}/>

        </>
    )
}

export default Jupiter;
