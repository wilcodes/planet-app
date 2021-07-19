import React from "react";
import {Element} from "../SubNavBar/Element";
import {NavigationBurger} from "../NavigationBurger";
import {Divider} from "../Divider";
import {planets} from "../../planetsData/planetsData";
import {Link} from "react-router-dom";
import {PlanetsNavWrapper} from "./PlanetsNavStyles";

const PlanetsNav = () =>{

    const renderPlanetsLinks =()=>(
        planets.map((el, i) =>(
            <Link to={'/'+el.name}  key={i} style={{textDecoration:"none"}} >
            <Element >
                    {el.name}
            </Element>
            </Link>
        ))
    );

    return(
        <>
            <PlanetsNavWrapper>
            <NavigationBurger navType="subNavigation" active={true} >
                {renderPlanetsLinks()}
            </NavigationBurger>
            <Divider/>
            </PlanetsNavWrapper>
        </>
    )
}

export default PlanetsNav;