import styled from "styled-components";

export const SidebarStyles = styled.section`
  position: fixed;
  z-index: 100;
  width:100%;
  left: 0;
  top: 0;
  height: 100%;
  background-color:#070724;
  transform: ${ props  => props.isModalOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in;
  box-sizing: border-box;
`