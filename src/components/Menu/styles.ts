import styled from "styled-components";

export const MenuContainer = styled.header`
  display: flex;
  height: 10rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0 2rem;

  background: #111;
  backdrop-filter: blur(24px);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  border-bottom: 1px solid #101013;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 2;
`;
