import Social from "../Social";
import {
  ContainerMobile,
  ContainerTitle,
  IntroTextH1,
  IntroTextH2,
  IntroTextP,
} from "./styles";
import Typewriter from "typewriter-effect";
export default function Title() {
  return (
    <>
      <ContainerMobile>
        <ContainerTitle>
          <IntroTextP>Olá,👋🏻 o meu nome é</IntroTextP>
          <IntroTextH1>Lucas Santana</IntroTextH1>
          <IntroTextH2>
            <Typewriter
              options={{
                strings: ["Front-end Developer", "React Specialist", "React Specialist"],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
              }}
            />
          </IntroTextH2>
          <Social/>
        </ContainerTitle>
      </ContainerMobile>
    </>
  );
}
