import React from "react";
import {Image} from "./Image";
import planetEarth from "../../assets/planet-earth.svg";
import planetEarth_structure from "../../assets/planet-earth-internal.svg";
import planetEarth_surface from "../../assets/geology-earth.png";
const PlanetImage = (props)=> {
    const defineImage = (planet, details)=>{
        if (details==="overview" || details === "surface"){
            return(
                <Image src={planetEarth} alt={planet}/>
            )
        }else if (details==="structure"){
            return(
                <Image src={planetEarth_structure} alt={planet} />
                )

        }
    }

    return(
        <>
        {defineImage(props.currentPlanet, props.planetDetail)}
        {props.planetDetail === "surface" &&
        (<Image
            src={planetEarth_surface}
            alt={"structure"}
            style={{width:"70px", height: "70px", zIndex:"99"}}/>)}
    </>
    )


}



export default PlanetImage;