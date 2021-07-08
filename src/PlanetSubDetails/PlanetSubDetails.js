import React from "react";
import {List, Element, Wrapper, Text} from "./SubDetailsStyles";

const PlanetSubDetails =()=> {
    return(
        <Wrapper>
            <List direction="column">
                <List>
                    <Element>
                        Rotation Time
                    </Element>
                    <Element type={"number"}>
                        58.6 DAYS
                    </Element>
                </List>

                <List>
                    <Element>
                        Revolution Time
                    </Element>
                    <Element type={"number"}>
                        87.97 DAYS
                    </Element>
                </List>
                <List>
                    <Element>
                        Radius
                    </Element>
                    <Element type={"number"}>
                        2,439.7 KM
                    </Element>
                </List>
                <List>
                    <Element>
                        Average Temp
                    </Element>
                    <Element type={"number"}>
                        430ºC
                    </Element>
                </List>
            </List>
        </Wrapper>
    )
}

export default PlanetSubDetails;