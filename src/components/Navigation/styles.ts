import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const Li = styled.li`
  list-style: none;
  color: #e2e8f0;
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  /* text-transform: uppercase; */
  cursor: pointer;
  position: relative;
  margin-bottom: 0.5rem;
  background-color: transparent;
  border-radius: 5px;
  padding: 1rem;
  transition: 0.3s;

  &:hover {
    background-color: #18181b;
    color: #7b73e5;
  }
`;
