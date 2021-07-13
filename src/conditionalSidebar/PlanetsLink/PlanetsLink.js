import React from "react";
import PlanetLink from "./PlanetLink";
import {planets} from "../../planetsData/planetsData";

const PlanetsLink = ()=>{
    const renderingPlanets = (planets)=>{
      return planets.map((el, i)=>(
           <PlanetLink name={planets.name} color={planets.color} key={i}/>
        ))
    }
    return(
        <>
            {renderingPlanets(planets)}
        </>
    )
};

export default PlanetsLink;