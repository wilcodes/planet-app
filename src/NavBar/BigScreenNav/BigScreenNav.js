import React from "react";
import {Element} from "./BigScreenStyles";
import {planets} from "../../planetsData/planetsData";
import {Link} from "react-router-dom";
import {Wrapper} from "./BigScreenStyles";
import {ColorIndicator} from "../SubNavBar/ColorIndicator";

const BigScreenNav = (props) =>{


    const renderPlanetsLinks =()=>(
        planets.map((el, i) =>(
            <Link to={'/'+el.name}   style={{textDecoration:"none", color:"fff"}} key={i}  >
                <Element >
                    {(props.currentPlanet ===el.name) && <ColorIndicator color={el.color} active={true}/> }
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