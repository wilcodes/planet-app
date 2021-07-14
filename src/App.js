import React from "react";
import {Route, Switch} from 'react-router-dom';
import {GlobalStyles} from "./GlobalStyles";
import Earth from "./Planets/Earth";
import Mercury from "./Planets/Mercury";
import Neptune from "./Planets/Neptune"
import Saturn from "./Planets/Saturn";
import Mars from "./Planets/Mars";
import Uranus from "./Planets/Uranus";
import Venus from "./Planets/Venus";
import Jupiter from "./Planets/Jupiter";

const App=()=>{
    return (
        <>
            <GlobalStyles/>
            <Switch>
                <Route path="/" exact component={Earth}/>
                <Route path="/earth" exact component={Earth}/>
                <Route path="/mercury" exact component={Mercury}/>
                <Route path="/neptune" exact component={Neptune}/>
                <Route path="/mars" exact component={Mars}/>
                <Route path="/saturn" exact component={Saturn}/>
                <Route path="/uranus" exact component={Uranus}/>
                <Route path="/venus" exact component={Venus}/>
                <Route path="/jupiter" exact component={Jupiter}/>
            </Switch>
        </>

    );
}

export default App;