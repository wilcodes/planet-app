import styled from "styled-components";

export const List = styled.ul`
  
  list-style: none;
  display: flex; 
  flex-direction: ${props => props.direction ==="column"? "column": "row"};
  padding: 1em;
  border: ${props => props.direction ==="column"? "none": "0.5px solid #cccccc "};
  margin: 0.3em;
  justify-content: space-between;
  
  
`

export const Element = styled.li`
  
  font-family: ${props=> props.type === "number"? "Antonio": "Spartan"};
  font-style: normal;
  font-weight:${props=> props.type === "number"? "normal": "bold"} ;
  font-size: ${props=> props.type === "number"? "26px": "12px"};
  line-height: 25px;
  /* identical to box height, or 208% */
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity:${props=> props.type === "number"? "1": "0.5"};
  
  

`

export const Wrapper = styled.div`

`

