import React from "react";
import {GlobalStyles} from "./GlobalStyles";
import HamburgerNav from "./NavBar/HamburgerNav/HamburgerNav";
import SubNavBar from "./NavBar/SubNavBar/SubNavBar";
const App = () =>{

  return(
      <div>
          <GlobalStyles/>
          <HamburgerNav/>
          <SubNavBar/>
      </div>
  )
}
export default App;
