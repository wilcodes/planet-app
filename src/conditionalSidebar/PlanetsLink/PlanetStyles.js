import styled from "styled-components";

export const FlexWrapper = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
  margin-top: 1em;
`
export const Planet = styled.div`
  font-family: "Spartan",serif;
  font-style: normal;
  font-weight: bold;
  font-size: 1.4em;
  line-height: 15px;
  color: #FFFFFF;
  text-align: justify;
  margin-bottom: 1em;
  margin-left: 1em;
  text-transform: uppercase;
`
export const BulletedDot = styled.div `
  position: relative;
  width: 20px;
  height: 20px;
  background-color: ${props=> props.color};
  border-radius: 50% 50%;
  margin-left: 1em;
`