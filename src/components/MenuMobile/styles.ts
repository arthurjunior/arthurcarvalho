import styled from "styled-components";

export const MobileContent = styled.div``;

interface Click {
  readonly open: boolean;
}

export const NavMenu = styled.nav<Click>`
  @media (max-width: 994px) {
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(24px);
    box-shadow: rgb(2, 6, 23) 0px 10px 30px 1px;
    z-index: 10;
    opacity: 0.95;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;

    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      list-style: none;
      padding: 0;
      text-align: center;
    }

    li {
      margin-bottom: 15px; /* Aumentei o espaçamento entre os itens */
      font-size: 20px; /* Aumentei o tamanho da fonte */
      letter-spacing: 1px; /* Adicionei espaçamento entre as letras */
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Adicionei sombreamento */
      transition: color 0.3s ease-in-out;

      a {
        text-decoration: none;
        color: inherit;

        &:hover {
          color: #007bff;
        }
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  transition: all 1s linear;

  @media (max-width: 994px) {
    display: block;
    position: fixed;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    z-index: 20;

    > svg {
      color: rgb(226, 232, 240);
      transition: color 0.5s ease-in-out;
    }
  }
`;
