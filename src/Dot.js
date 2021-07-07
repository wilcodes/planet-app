import styled from "styled-components";
export const Dot = styled.div`
  position: absolute;
  right: ${props => props.random}px;
  bottom:${props => props.random }px; 
  width: 2px;
  height: 2px;
  background-color: rgb(151, 151, 151);
  border-radius: 50% 50%;
 
`

export const DotTop = styled.div `
  position: absolute;
  left: ${props => props.random}px;
  top:${props => props.random }px;
  width: 2px;
  height: 2px;
  background-color: rgb(151, 151, 151);
  border-radius: 50% 50%;
`