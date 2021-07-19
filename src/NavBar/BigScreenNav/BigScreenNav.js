import React,{useState} from "react";
import {Element} from "./BigScreenStyles";
import {planets} from "../../planetsData/planetsData";
import {Link} from "react-router-dom";
import {Wrapper} from "./BigScreenStyles";

const BigScreenNav = () =>{
    const renderPlanetsLinks =()=>(
        planets.map((el, i) =>(
            <Link to={'/'+el.name}   style={{textDecoration:"none", color:"fff"}} key={i}  >
                <Element >
                    {el.name}
                </Element>
            </Link>

        ))
    );

    return(
        <>
            <Wrapper>
                {renderPlanetsLinks()}
            </Wrapper>
        </>
    )
}

export default BigScreenNav;