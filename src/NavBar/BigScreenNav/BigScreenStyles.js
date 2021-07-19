import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0.5em;

  @media only screen and (min-width:0px) and (max-width: 1024px){
    display: none
  }
  
`

export const Element = styled.li`
  font-family: "Spartan";
  list-style: none;
  text-transform: uppercase;
  font-weight: bold;
  font-style: normal;
  font-size: 12px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 1.92857px;
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
  cursor:pointer;
  margin-top:2em ;
  padding: 1.3em;
  &:hover{
    opacity: 1;
  }
`