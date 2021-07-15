import React from "react";
import {List, Element, Wrapper} from "./SubDetailsStyles";

const PlanetSubDetails =({planet})=> {
    return(
        <Wrapper >
            <List direction="column">
                <List>
                    <Element>
                        {planet.characteristics.rotationTime.title}
                    </Element>
                    <Element type={"number"}>
                        {planet.characteristics.rotationTime.description}
                    </Element>
                </List>

                <List>
                    <Element>
                        {planet.characteristics.revolutionTime.title}
                    </Element>
                    <Element type={"number"}>
                        {planet.characteristics.revolutionTime.description}
                    </Element>
                </List>
                <List>
                    <Element>
                        {planet.characteristics.radius.title}
                    </Element>
                    <Element type={"number"}>
                        {planet.characteristics.radius.description}
                    </Element>
                </List>
                <List>
                    <Element>
                        {planet.characteristics.averageTemp.title}
                    </Element>
                    <Element type={"number"}>
                        {planet.characteristics.averageTemp.description}
                    </Element>
                </List>
            </List>
        </Wrapper>
    )
}

export default PlanetSubDetails;