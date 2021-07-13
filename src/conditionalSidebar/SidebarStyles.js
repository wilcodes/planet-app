import styled from "styled-components";

export const SidebarStyles = styled.section`
  position: fixed;
  z-index: 500;
  width:100%;
  top: 0;
  box-sizing: border-box;
  height: 100vh;
  background-color: #070724;
  transform: ${ props  => props.isModalOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in;
`