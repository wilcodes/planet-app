import React, {useState} from "react";
import {GlobalStyles} from "./GlobalStyles";
import HamburgerNav from "./NavBar/HamburgerNav/HamburgerNav";
import SubNavBar from "./NavBar/SubNavBar/SubNavBar";
import Dots from "./Dots";
import MainSection from "./MainSection/MainSection";
import PlanetSubDetails from "./PlanetSubDetails/PlanetSubDetails";
const App = () =>{
    const [planetDetails, setPlanetDetails]= useState('overview')
  return(
      <>
         < Dots />
          <GlobalStyles/>
              <HamburgerNav/>
              <SubNavBar planetDetail={(planetD)=>setPlanetDetails(planetD)} userDecision={planetDetails}/>
              <MainSection planetDetail={planetDetails}/>
              <PlanetSubDetails/>
      </>
  )
}
export default App;
