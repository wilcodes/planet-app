import React from "react";
import {Image} from "./Image";

import planetEarth from "../../assets/planet-earth.svg";
import planetEarth_structure from "../../assets/planet-earth-internal.svg";
import planetEarth_surface from "../../assets/geology-earth.png";

import planetMercury from "../../assets/planet-mercury.svg"
import planetMercury_structure from "../../assets/planet-mercury-internal.svg";
import planetMercury_surface from "../../assets/geology-mercury.png"

import planetMars from "../../assets/planet-mars.svg"
import planetMars_structure from "../../assets/planet-mars-internal.svg";
import planetMars_surface from "../../assets/geology-mars.png";

import planetVenus from "../../assets/planet-venus.svg";
import planetVenus_structure from "../../assets/planet-venus-internal.svg";
import planetVenus_surface from "../../assets/geology-venus.png";

import planetUranus from "../../assets/planet-uranus.svg";
import planetUranus_structure from "../../assets/planet-uranus-internal.svg";
import planetUranus_surface from "../../assets/geology-uranus.png";

import planetNeptune from "../../assets/planet-neptune.svg";
import planetNeptune_structure from "../../assets/planet-neptune-internal.svg";
import planetNeptune_surface from "../../assets/geology-neptune.png";

import planetSaturn from "../../assets/planet-saturn.svg";
import planetSaturn_structure from "../../assets/planet-saturn-internal.svg";
import planetSaturn_surface from "../../assets/geology-saturn.png";

import planetJupiter from "../../assets/planet-jupiter.svg";
import planetJupiter_structure from "../../assets/planet-jupiter-internal.svg";
import planetJupiter_surface from "../../assets/geology-jupiter.png";




const PlanetImage = (props)=> {


    const defineImage = (planet, details,src1, src2, src3)=>{

                if (details==="overview" ){
                    return(<div style={{margin:"0 auto"}}>
                            <Image src={src1} alt={planet}/>
                    </div>

                    )
                }else if (details==="structure"){
                    return(
                        <Image src={src2} alt={planet} />
                    )

                }else if ( details === "surface"){
                    return (
                            <>
                                <Image src={src1} alt={planet}/>
                                <Image
                                src={src3}
                                alt={"structure"}
                                style={{width:"70px", height: "70px", zIndex:"99"}}/>
                             </>

                    )
                }
        }

const planetDecision = (planet)=> {
    switch (planet){
        case ("earth"):
            return defineImage(props.currentPlanet, props.planetDetail,planetEarth,planetEarth_structure, planetEarth_surface)
        case ("venus"):
            return defineImage(props.currentPlanet, props.planetDetail,planetVenus,planetVenus_structure, planetVenus_surface)
        case ("uranus"):
            return defineImage(props.currentPlanet, props.planetDetail,planetUranus,planetUranus_structure, planetUranus_surface)
        case ("neptune"):
            return defineImage(props.currentPlanet, props.planetDetail,planetNeptune,planetNeptune_structure, planetNeptune_surface)
        case ("saturn"):
            return defineImage(props.currentPlanet, props.planetDetail,planetSaturn,planetSaturn_structure, planetSaturn_surface)

        case ("jupiter"):
            return defineImage(props.currentPlanet, props.planetDetail,planetJupiter,planetJupiter_structure, planetJupiter_surface)
        case ("mercury"):
            return defineImage(props.currentPlanet, props.planetDetail,planetMercury,planetMercury_structure, planetMercury_surface)
        case ("mars"):
           return  defineImage(props.currentPlanet, props.planetDetail,planetMars, planetMars_structure, planetMars_surface)
        default: return null
    }
}

    return(
       <>
           {planetDecision(props.currentPlanet)}
       </>


    )
}
export default PlanetImage;