import styled from "styled-components";

export const ButtonWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media only screen and (max-width: 700px){
    width: 0;
  }
`
export const Button = styled.button`
  opacity: 1;
  padding: 0.5em;
  background-color: ${props => props.userSelection};
  /* identical to box height, or 278% */
  margin: 1em;
  border: 1px solid #5b5b5b;

  &:active {
    background-color: #6D2ED5;;
    opacity: 1;
  }
  &:hover {
    background-color: rgba(216, 216, 216, 1)
   
  }

  @media only screen and (max-width: 700px) {
    display: none;
  }

`
export const Text = styled.p`
  opacity: 1;
  font-family: Spartan;
  font-style: normal;
  font-weight: bold;
  font-size: 9px;
  line-height: 25px;
  /* identical to box height, or 278% */

  letter-spacing: 1.92857px;
  text-transform: uppercase;

  color: #FFFFFF;

`
