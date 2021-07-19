import styled from "styled-components";

export const ColorIndicator = styled.div`
  position: relative;
  width: 110%;
  height: 4px;
  left: -5px;
  top: 170%;
  background: ${props=> props.color};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media only screen and (min-width:700px) and (max-width: 1024px){
  display: ${props => props.active === false && "none"}
}
  @media only screen and (min-width: 1025px)  {
    display: ${props => props.active === false && "none"}
  }
  

`