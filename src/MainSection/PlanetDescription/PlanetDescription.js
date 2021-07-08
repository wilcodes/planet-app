import React from "react";
import {Title, Text, Link, Wrapper} from "./DescriptionStyles"
const PlanetDescription = () =>{
    return(
        <Wrapper direction={"column"} >
            <Title>Earth</Title>
            <Text>Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive. </Text>
              <Wrapper >
                  <Text style={{opacity:"0.5", mixBlend: "normal"}}>Source:</Text> <Link>Wikipedia</Link>
              </Wrapper>
        </Wrapper>
    )
}
export default PlanetDescription;