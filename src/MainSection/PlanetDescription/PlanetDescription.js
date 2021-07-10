import React from "react";
import {Title, Text, Link, Wrapper} from "./DescriptionStyles"
import { TiArrowRightThick } from "react-icons/ti";
import {earth} from "../../planetsData/planetsData";

const PlanetDescription = ({planetDetail, currentPlanet}) =>{
    const textRender=(userChoice)=>{
        if (userChoice==="overview"){
            return(<Text>{earth.overview}</Text>)
        }else if(userChoice ==="surface"){
            return(<Text>{earth.surface}</Text>)
        }else if (userChoice === "structure"){
            return(<Text>{earth.internalStructure}</Text>)
        }
    }
    return(
        <Wrapper direction={"column"} >
            <Title>{currentPlanet}</Title>
            {textRender(planetDetail)}
              <Wrapper >
                  <Text style={{opacity:"0.5", mixBlend: "normal"}}>Source:</Text> <Link>Wiki <TiArrowRightThick style={{position:"relative", top:"3px", left:"1px", width:"15px", height: "15px"}}/> </Link>
              </Wrapper>
        </Wrapper>
    )
};
export default PlanetDescription;