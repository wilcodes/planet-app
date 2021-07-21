import styled from "styled-components";

export const Image = styled.img`
  width: 173px;
  height: 173px;

  @media only screen and (min-width:700px) and (max-width: 1024px){
    width: 285px;
    height: 285px;
  }
  @media only screen and (min-width: 1025px)  {
    width: 400px;
    height: 400px;
  }
`

export const ImageTwo = styled.img`
  width: 70px;
  height: 70px;
  @media only screen and (min-width:700px) and (max-width: 1024px){
    width: 120px;
    height: 100px;
  }
  @media only screen and (min-width: 1025px)  {
    width: 199px;
    height: 163px;
    z-index: 99;
  }
`

export const Wrapper = styled.div`
display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`