import React from "react";
import PlanetLink from "./PlanetLink";
import {planets} from "../../planetsData/planetsData";

const PlanetsLink = ()=>(
    <>
        { planets.map((el,i)=>(
            <PlanetLink planet={el.name} colorHex={el.color} key={i}/>
        ))}
    </>
)



export default PlanetsLink;