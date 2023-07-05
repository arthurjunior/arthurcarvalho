import { Link } from "react-router-dom";
import {
  ContentAbout,
  ContainerAbout,
  Button,
  ButtonAlternatives,
} from "./styles";
import astrounataCoffee from "../../assets/images/astronauta-cafe.png";
import { ArrowRight, TelegramLogo } from "phosphor-react";
import CardAnimation from "../CardAnimation";
export default function CardAbout() {
  return (
    <>
      <ContainerAbout>
        <CardAnimation />
        <ContentAbout>
          <div className="aboutImg">
            <img src={astrounataCoffee} alt="" />
          </div>

          <div className="aboutContent">
            <div className="aboutDescription">
              <h2>Deixe-me apresentar</h2>
              <p>
                Sou um desenvolvedor front-end apaixonado por projetar e
                codificar. Minha especialidade é a criação de interfaces e
                funcionalidades para aplicativos da web usando React.js e
                Next.js. Proativo e com rápido aprendizado, com forte
                capacidade de adaptação. Sempre em busca de novos desafios para
                expandir minhas habilidades e acompanhar o campo de
                desenvolvimento , que está em constante evolução.
              </p>
              <div className="aboutBtns">
                <Link to="#">
                  <Button>
                    Entre em Contato
                    <TelegramLogo
                      style={{
                        marginBottom: "-0.1rem",
                        marginLeft: "0.2rem",
                      }}
                      size={16}
                      weight="bold"
                    />
                  </Button>
                </Link>
                <Link to="#">
                  <ButtonAlternatives>
                    Ler mais
                    <ArrowRight
                      style={{
                        marginBottom: "-0.1rem",
                        marginLeft: "0.2rem",
                      }}
                      weight="bold"
                      size={16}
                    />
                  </ButtonAlternatives>
                </Link>
              </div>
            </div>
          </div>
        </ContentAbout>
      </ContainerAbout>
    </>
  );
}
