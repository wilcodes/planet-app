import React from "react";
import {Element} from "../SubNavBar/Element";
import {NavigationBurger} from "../NavigationBurger";
import {Divider} from "../Divider";
import {planets} from "../../planetsData/planetsData";
import {Link} from "react-router-dom";
import {PlanetsNavWrapper} from "./PlanetsNavStyles";
import {ColorIndicator} from "../SubNavBar/ColorIndicator";

const PlanetsNav = (props) =>{

    const renderPlanetsLinks =()=>(
        planets.map((el, i) =>(
            <Link to={'/'+el.name}  key={i} style={{textDecoration:"none"}} >
            <Element >
                {props.planet=== el.name && <ColorIndicator active={true} color={el.color}/>}
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