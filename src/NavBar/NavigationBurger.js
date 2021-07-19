import styled from "styled-components";
export const NavigationBurger = styled.nav`
display: flex;
justify-content: space-around;  
padding: ${props => props.navType === "subNavigation" ? "1.5em" : "0"};

  @media only screen and (min-width:700px) and (max-width: 1024px){
    display: ${props => props.active === false && "none"}
  }
  @media only screen and (min-width: 1025px)  {
    display: ${props => props.active === false && "none"}
  }  
`