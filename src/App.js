import React from "react";
import NavBar from "./NavBar/HamburgerNav/NavBar";
import {GlobalStyles} from "./GlobalStyles";
import HamburgerNav from "./NavBar/HamburgerNav/HamburgerNav";
const App = () =>{

  return(
      <div>
          <NavBar/>
          <HamburgerNav/>
          <GlobalStyles/>
      </div>
  )
}
export default App;
