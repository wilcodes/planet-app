import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  list-style: none;
  margin-bottom: 0.5em;
  
  
  @media only screen and (min-width: 1025px)  {
    flex-direction: row;
  }
  
`

export const BoxContentWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   flex-direction: row ;
   align-items: center;
  margin-top: 2em;
  @media only screen and (min-width: 1025px)  {
    flex-direction: column;
    width: 50%;
  }
 
  
  
`

