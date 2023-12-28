import Social from "../Social";
import {
  ButtonPrimary,
  ContainerMobile,
  ContainerTitle,
  IntroTextH1,
  IntroTextH2,
  IntroTextP,
} from "./styles";
import Typewriter from "typewriter-effect";
import { FiArrowRight } from "react-icons/fi";

export default function Title() {
  return (
    <>
      <ContainerMobile>
        <ContainerTitle
        >
          <IntroTextP>Olá, o meu nome é</IntroTextP>
          <IntroTextH1 >Arthur Carvalho</IntroTextH1>
          <IntroTextH2>
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Curioso",
                  "Comprometido",
                ],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
          </IntroTextH2>
          <Social />

          <div className="button">
            <ButtonPrimary>
              <a href="#projects">
                <span>
                  <b>Conheça meu portfólio</b>
                  <FiArrowRight
                    style={{ marginBottom: "-0.48rem" }}
                    size={20}
                  />
                </span>
              </a>
            </ButtonPrimary>
          </div>
        </ContainerTitle>
      </ContainerMobile>
    </>
  );
}
