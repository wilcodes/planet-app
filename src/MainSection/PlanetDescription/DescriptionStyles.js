import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Antonio";
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 52px;
  /* identical to box height */
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
`

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: ${props=> props.direction === "column" ? "column" : "row"};
  justify-content: flex-start;
  margin: 0 auto;
  width: ${props=> props.direction === "column" ? "70%": "auto"};
`

export const Link = styled.a`
  font-family: "Spartan";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 25px;
  /* identical to box height, or 208% */
  color: #FFFFFF;
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-top: 0.85em;
  margin-left: 0.3em;
  text-decoration: underline;
`

export const Text = styled.p`
  font-family: "Spartan";
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 22px;
  /* or 200% */
  text-align: center;
  color: #FFFFFF;
  
`
