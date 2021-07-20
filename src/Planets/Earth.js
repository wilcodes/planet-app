import React, {useState} from "react";
import SubNavBar from "../NavBar/SubNavBar/SubNavBar";
import Dots from "../Dots";
import MainSection from "../MainSection/MainSection";
import PlanetSubDetails from "../PlanetSubDetails/PlanetSubDetails";
import {earth} from "../planetsData/planetsData";


const Earth = () =>{
    const [planetDetails, setPlanetDetails]= useState('overview');

  return(
      <>
         < Dots />

              <SubNavBar
                  planetDetail={(planetD)=>setPlanetDetails(planetD)}
                  userDecision={planetDetails}
                  currentPlanet={"earth"}
                  planetColor={earth.color}

              />
              <MainSection planetDetail={planetDetails}
                           currentPlanet={"earth"}
                           planet={earth}
                           planetDetails={(planetD)=>setPlanetDetails(planetD)}/>
              <PlanetSubDetails planet={earth}/>

      </>
  )
}

export default Earth;
