import styled from "styled-components";

export const Container = styled.section`
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const ContainerGit = styled.div`
  border-radius: 15px;
  border: 1px solid #8485f6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 26.9rem;
  padding-bottom: 5rem;
  max-width: 30rem;
`;

export const ContentGit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;

  @media (min-width: 768px) {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    padding-left: 4rem;
  }
`;



export const ButtonGit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 4.7rem;
  cursor: pointer;
  border: 0.25em solid rgb(82, 82, 224);
  padding: 1.6rem 5.2rem;
   color: rgb(239, 240, 247);
  font-size: 1.6rem;
  font-weight: 700;
  background-color: transparent;
  border-radius: 1em;
  outline: none;
  position: relative;
  transition: all 0.3s;
  font-family: Arial, Helvetica, sans-serif;

  &:hover {
    color: black;
    background-color: rgb(239, 240, 247);
    box-shadow: 0 0 1em 0.25em rgb(82, 82, 224),
      0 0 4em 2em rgb(82, 82, 224),
      inset 0 0 0.75em 0.25em rgb(239, 240, 247);
  }
`;
