import styled from "styled-components"

export const Burger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 24px;
  height: 2em;
  z-index: 10;
  padding: 0;
  background: transparent;
  justify-content: space-around;
  border: none;
  left: 1rem;
  margin-top: 3em;
  margin-right: 1em;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.2rem;
    background: ${({ open }) => open ? '#FFFFFF' : '#EFFFFA'};
   
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-50deg)' : 'rotate(0)'};
    }
  }
`