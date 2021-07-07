import React from "react";
import {GlobalStyles} from "./GlobalStyles";
import HamburgerNav from "./NavBar/HamburgerNav/HamburgerNav";
import SubNavBar from "./NavBar/SubNavBar/SubNavBar";
import Dots from "./Dots";

const App = () =>{
  return(
      <div>
         < Dots />
          <GlobalStyles/>
          <HamburgerNav/>
          <SubNavBar/>
      </div>
  )
}
export default App;
