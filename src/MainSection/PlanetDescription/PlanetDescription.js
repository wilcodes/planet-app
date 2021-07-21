import React from "react";
import {Title, Text, Link, Wrapper} from "./DescriptionStyles"

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
                  <Text style={{opacity:"0.5", mixBlend: "normal"}}>Source:
                      <Link href={'https://en.wikipedia.org/wiki/Main_Page'} target="_blank">  Wikipedia</Link>

                  </Text>

              </Wrapper>
        </Wrapper>
    )
};
export default PlanetDescription;