import React from "react";
import {Title, Text, Link, Wrapper} from "./DescriptionStyles"
import { TiArrowRightThick } from "react-icons/ti";

const PlanetDescription = ({planetDetail, currentPlanet,planet}) =>{
    const textRender=(userChoice)=>{
        if (userChoice==="overview"){
            return(<Text>{planet.overview}</Text>)
        }else if(userChoice ==="surface"){
            return(<Text>{planet.surface}</Text>)
        }else if (userChoice === "structure"){
            return(<Text>{planet.internalStructure}</Text>)
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