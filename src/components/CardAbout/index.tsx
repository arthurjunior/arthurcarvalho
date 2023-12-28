import { Link } from "react-router-dom";
import {
  ContentAbout,
  ContainerAbout,
  Button,

} from "./styles";
import astrounataCoffee from "../../assets/images/12.jpg";
import { TelegramLogo } from "phosphor-react";
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
              <h2>Meu perfil profissional</h2>
              <p>
              Como programador, transformo ideias em apps incríveis, mantendo as coisas simples e funcionais.
               Minha atenção aos detalhes garante que tudo seja fácil de usar, tornando a tecnologia acessível para todos. 
               Sou comprometido com a qualidade, resolvendo problemas de forma eficiente e colaborando para criar coisas
                incríveis! Me fale sobre seu problema!?
              </p>
              <div className="aboutBtns">
                <Link to="mailto:dev.arthurcarvalho@gmail.com">
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
              </div>
            </div>
          </div>
        </ContentAbout>
      </ContainerAbout>
    </>
  );
}
