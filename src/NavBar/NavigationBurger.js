import styled from "styled-components";
export const NavigationBurger = styled.nav`
display: flex;
justify-content: space-around;  
padding: ${props => props.navType === "subNavigation" ? "1.5em" : "0"} ;  
`