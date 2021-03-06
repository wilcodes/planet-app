import React from "react";
import {Divider} from "../../NavBar/Divider";
import { MdKeyboardArrowRight } from "react-icons/md";
import {FlexWrapper, Planet, BulletedDot} from "./PlanetStyles";
import { Link } from "react-router-dom";
const PlanetLink = (props)=>(

  <>
  <Link to={props.planet} style={{textDecoration:"none", color:"#FFFFFF"}} >
      <FlexWrapper>

            <FlexWrapper>
              <BulletedDot color={props.colorHex}/>
              <Planet>{props.planet}</Planet>
            </FlexWrapper>

          <MdKeyboardArrowRight
              style={
                  {position:"relative",
                      top:"1.3em",
                      left:"1px",
                      width:"20px",
                      height: "20px",
                      mixBlendMode:"normal",
                      opacity:"0.4",
                      marginRight:"0.5em"
                  }}>
          </MdKeyboardArrowRight>

      </FlexWrapper>
  </Link>
      <Divider/>

  </>
);

export default PlanetLink;