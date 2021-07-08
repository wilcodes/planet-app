import React from "react";
import {GlobalStyles} from "./GlobalStyles";
import HamburgerNav from "./NavBar/HamburgerNav/HamburgerNav";
import SubNavBar from "./NavBar/SubNavBar/SubNavBar";
import Dots from "./Dots";
import MainSection from "./MainSection/MainSection";
import image from "./assets/planet-jupiter-internal.svg"
const App = () =>{
  return(
      <div>
         < Dots />
          <GlobalStyles/>
          <HamburgerNav/>
          <SubNavBar/>
          <MainSection/>

      </div>
  )
}
export default App;
