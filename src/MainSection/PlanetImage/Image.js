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