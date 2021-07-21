import styled from "styled-components";

export const Title = styled.h1`
  font-family: "Antonio";
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 52px;
  /* identical to box height */
  text-transform: uppercase;
  color: #FFFFFF;
  text-align: center;
  
  
  @media only screen and (min-width: 1024px){
    font-size: 80px;
    line-height: 104px;
    text-align: center;
  }
  @media only screen and (min-width:700px) and (max-width: 1024px){
    font-size: 48px;
    line-height: 62px;
    text-align: left;
  }
  
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${props=> props.direction === "column" ? "column" : "row"};
  justify-content: flex-start;
  margin: 0 auto;
  width: ${props=> props.direction === "column" ? "70%": "auto"};

  @media only screen and  (max-width: 700px){
    margin-left: 4em;
   

  }
  @media only screen and  (min-width: 700px) and  (max-width: 1024px){
    
    padding: 1.5em;

  }
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
  @media only screen and (min-width:700px) and (max-width: 1024px){
    text-align: left;
    margin-top: 1.1em;
  }
  @media only screen and (min-width: 1025px)  {
    
    font-size: 15px;
    line-height: 25px;
    margin: 0 auto;
    text-align: left;
  }
 
`

export const Text = styled.p`
  font-family: "Spartan",serif;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 22px;
  color: #FFFFFF;
  text-align: justify;

  @media only screen and (min-width:700px) and (max-width: 1024px){
    font-size: 14px;
    line-height: 25px;
  }
  @media only screen and (min-width: 1025px)  {
    font-size: 15px;
    line-height: 25px;
    width: 80%;
    margin: 10px auto;
    text-align: left;
    display: flex;
  }
`
